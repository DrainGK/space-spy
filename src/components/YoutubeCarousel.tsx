import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Video {
  url: string;
  title: string;
}

// Récupère l'ID YouTube à partir d'une URL ou d'un ID
const getVideoId = (urlOrId: string) => {
  if (urlOrId.includes("youtube.com/embed/")) {
    return urlOrId.split("/embed/")[1];
  }
  if (urlOrId.includes("watch?v=")) {
    return urlOrId.split("watch?v=")[1].split("&")[0];
  }
  return urlOrId;
};

const YoutubeCarousel: React.FC = () => {
  // 11 slots : skeletons par défaut
  const [videos, setVideos] = useState<Video[]>(
    // Array(11).fill({ url: "0bT2p-GsF2U", title: "test" })
    Array(11).fill({ url: "/hp/assets/youtube_card.png", title: "" })
  );
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calcul des contraintes de drag dès que la liste change
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const contentWidth = el.scrollWidth;
      const viewWidth = el.clientWidth;
      const maxLeft = contentWidth - viewWidth + viewWidth / 2;
      const maxRight = (viewWidth / 2) * 0.25;
      setConstraints({ left: -maxLeft, right: maxRight });
    });
  }, [videos]);

  // Chargement des vidéos réelles depuis /videos.json
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/hp/videos.json");
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

  // Met à jour l'indicateur actif en fin ou pendant le drag
  const handleDragEnd = () => {
    const el = containerRef.current;
    const sec = sectionRef.current;
    if (!el || !sec) return;

    const { left, width } = sec.getBoundingClientRect();
    const zoneL = left + width * 0.1;
    const zoneR = left + width * 0.9;

    const items = Array.from(el.children) as HTMLElement[];
    for (let i = 0; i < items.length; i++) {
      const r = items[i].getBoundingClientRect();
      const centerX = r.left + r.width / 2;
      if (centerX >= zoneL && centerX <= zoneR) {
        setActiveIndex(i);
        break;
      }
    }
  };

  return (
    <>
      <div ref={sectionRef} className="carousel w-full overflow-x-hidden">
        <motion.div
          ref={containerRef}
          className="slides-container flex ml-15 gap-x-10"
          drag={containerRef.current ? "x" : false}
          dragConstraints={constraints}
          dragTransition={{ power: 0 }}
          onDrag={handleDragEnd}
          onDragEnd={handleDragEnd}
        >
          {videos.map((video, idx) => {
            const isSkeleton = video.title === "";
            const id = getVideoId(video.url);
            const thumbUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

            return (
              <div key={idx} className="w-46 flex-shrink-0">
                {isSkeleton ? (
                  <img
                    src={video.url}
                    alt={`skeleton ${idx + 1}`}
                    draggable={false}
                    className="w-full h-[328px] object-cover"
                  />
                ) : (
                  <img
                    src={thumbUrl}
                    alt={video.title}
                    draggable={false}
                    className="w-full h-[328px] object-cover cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>

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

      {selectedVideo && (
        <div
          className="fixed h-screen w-screen inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative h-8/10 w-9/10 flex items-center justify-center rounded-4xl" onClick={e => e.stopPropagation()}>
          <button
              className="absolute top-2 right-2 text-white text-6xl leading-none"
              onClick={() => setSelectedVideo(null)}
            >
              ×
            </button>
            <iframe
              width="90%"
              height="80%"
              src={`https://www.youtube.com/embed/${getVideoId(
                selectedVideo.url
              )}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default YoutubeCarousel;
