import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const YoutubeCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [constraints, setConstraints] = useState({left:0 , right:0});
    const containerRef = useRef<HTMLDivElement>(null);

    const videos = [
        '/assets/youtube_card.png',
        '/assets/youtube_card.png',
        '/assets/youtube_card.png',
        '/assets/youtube_card.png',
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
        if(!element) return;

        const zoneLeft = window.innerWidth * 0.1;
        const zoneRight = window.innerWidth *0.9;

        const img = Array.from(element.querySelectorAll<HTMLImageElement>("img"));
        for (let i = 0; i < img.length; i++){
            const rect = img[i].getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            if(centerX >= zoneLeft && centerX <= zoneRight){
                setActiveIndex(i);
                break;
            }
        }
    }
  return (
    <div className="carousel overflow-x-hidden">
        <motion.div 
            ref={containerRef}
            className="slides-container flex ml-15 gap-x-10"
            drag="x"
            dragConstraints={constraints}
            onDrag={handleDragEnd}
            onDragEnd={handleDragEnd}
        >
            {videos.map((card, index)=>(
                <img className="w-46" src={card} key={index} draggable={false}>
                </img>
            ))}
        </motion.div>
        <div className="indicators-container flex gap-x-2 w-fit mx-auto my-5">
            {videos.map((indicator, index)=>(
                <span key={index} className={`indicator w-5 h-5 rounded-full ${ index === activeIndex ? 'bg-[#370617]':'bg-[#D9D9D9]'}`}></span>
            ))}
        </div>
    </div>
  )
}

export default YoutubeCarousel