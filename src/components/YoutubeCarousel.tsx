import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const YoutubeCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [constraints, setConstraints] = useState({left:0 , right:0});
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const videos = [
        '/assets/youtube_card.webp',
        '/assets/youtube_card.webp',
        '/assets/youtube_card.webp',
        '/assets/youtube_card.webp',
    ];

    useLayoutEffect(() =>{
        const element = containerRef.current;
        if(!element) return;

        const contentWidth = element.scrollWidth; //largeur totales des slides
        const viewWidth = element.clientWidth;
        const extraDrag = (viewWidth)/2;

        const maxLeft = contentWidth  + extraDrag;
        const maxRight = extraDrag*0.25;

        console.log(contentWidth, extraDrag);
        

        setConstraints({ left: -maxLeft, right: maxRight})

    }, [])

    const handleDragEnd = () => {
        const element = containerRef.current;
        const section = sectionRef.current;
        if(!element) return;
        if(!section) return;

        const rect = section.getBoundingClientRect();
        const containerWidth = rect.width; // 430px max sur desktop
        const containerLeft = rect.left;

        const zoneLeft = containerLeft + containerWidth * 0.1;
        const zoneRight = containerLeft + containerWidth * 0.9;

        const img = Array.from(element.querySelectorAll<HTMLImageElement>("img"));
        for (let i = 0; i < img.length; i++){
            const imgRect = img[i].getBoundingClientRect();
            const centerX = imgRect.left + imgRect.width / 2;
            if(centerX >= zoneLeft && centerX <= zoneRight){
                setActiveIndex(i);
                break;
            }
        }
    }

  return (
    <div ref={sectionRef} className="carousel w-full overflow-x-hidden">
        <motion.div 
            ref={containerRef}
            className="slides-container flex ml-15 gap-x-10"
            drag="x"
            dragConstraints={constraints}
            onDragEnd={handleDragEnd}
            onDrag={handleDragEnd}
        >
            {videos.map((card, index)=>(
                <img className="w-46" src={card} key={index} draggable={false} alt={`youtube card ${index}`}>
                </img>
            ))}
        </motion.div>
        <div className="indicators-container flex gap-x-2 w-fit mx-auto my-5">
            {videos.map((_indicator, index)=>(
                <span key={index} className={`indicator w-5 h-5 rounded-full ${ index === activeIndex ? 'bg-[#370617]':'bg-[#D9D9D9]'}`}></span>
            ))}
        </div>
    </div>
  )
}

export default YoutubeCarousel