import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Video {
  url: string;
  title: string;
}

const getEmbedUrl = (urlOrId: string) => {
  // Si c'est déjà une URL d'embed, on la renvoie telle quelle
  if (urlOrId.includes("youtube.com/embed/")) {
    return urlOrId;
  }
  // Si c'est une URL "watch?v=", on extrait le param v
  if (urlOrId.includes("watch?v=")) {
    const id = urlOrId.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  // Sinon on considère que c'est juste l'ID
  return `https://www.youtube.com/embed/${urlOrId.split("?")[0]}`;
};

const YoutubeCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  // 11 slots : 4 skeletons + up to 7 vidéos
  const [videos, setVideos] = useState<Video[]>(
    Array(11).fill({ url: "/assets/youtube_card.png", title: "" })
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // recalcul des contraintes de drag dès que le DOM change
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    requestAnimationFrame(() => {
      const contentWidth = el.scrollWidth;
      const viewWidth = el.clientWidth;
      // on enlève viewWidth pour que la limite soit bien la fin des slides
      const maxLeft = contentWidth - viewWidth + viewWidth / 2;
      const maxRight = (viewWidth / 2) * 0.25;
      setConstraints({ left: -maxLeft, right: maxRight });
    });
  }, [videos]);

  // fetch JSON au montage
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/videos.json");
        if (!res.ok) throw new Error("Status " + res.status);
        const data: Video[] = await res.json();

        setVideos(prev => {
          const slotCount = prev.length;
          const copy = [...prev];
          data.forEach((vid, i) => {
            if (i < slotCount) copy[i] = vid;
            else copy.push(vid);
          });
          return copy;
        });
      } catch (err) {
        console.error("Erreur chargement videos.json :", err);
      }
    })();
  }, []);

  // mise à jour du dot actif
  const handleDragEnd = () => {
    const el = containerRef.current;
    const sec = sectionRef.current;
    if (!el || !sec) return;

    const { left, width } = sec.getBoundingClientRect();
    const zoneL = left + width * 0.1;
    const zoneR = left + width * 0.9;

    const imgs = Array.from(el.querySelectorAll("img, iframe"));
    for (let i = 0; i < imgs.length; i++) {
      const r = imgs[i].getBoundingClientRect();
      const centerX = r.left + r.width / 2;
      if (centerX >= zoneL && centerX <= zoneR) {
        setActiveIndex(i);
        break;
      }
    }
  };

  return (
    <div ref={sectionRef} className="carousel w-full overflow-x-hidden">
      <motion.div
        ref={containerRef}
        className="slides-container flex ml-15 gap-x-10"
        drag="x"
        dragConstraints={constraints}
        onDragEnd={handleDragEnd}
        onDrag={handleDragEnd}
        dragTransition={{ power: 0 }}
      >
        {videos.map((video, i) => {
          const isSkeleton = video.title === "";
          const embedUrl = getEmbedUrl(video.url);

          return (
            <div key={i} className="w-46 flex-shrink-0">
              {isSkeleton ? (
                // Skeleton placeholder
                <img
                  src={video.url}
                  alt={`skeleton ${i + 1}`}
                  draggable={false}
                  className="w-full"
                />
              ) : (
                // **Vraie vidéo** YouTube en iframe
                <iframe
                  key={i}
                  className="w-full h-[328px]"
                  src={embedUrl}
                  title={video.title}
                  width="185"
                  height="328"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

              )}
            </div>
          );
        })}
      </motion.div>

      <div className="indicators-container flex gap-x-2 w-fit mx-auto my-5">
        {videos.map((_, idx) => (
          <span
            key={idx}
            className={`indicator w-5 h-5 rounded-full ${
              idx === activeIndex ? "bg-[#370617]" : "bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default YoutubeCarousel;
