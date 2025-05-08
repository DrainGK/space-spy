import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Header = () => {
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, [0, 0.04, 0.07, 0.1], [0, -500, 200, -500]);
    const y = useTransform(scrollYProgress, [0, 0.04, 0.07, 0.1], [0, 300, 400, 700]);
    const rawScaleX = useTransform(scrollYProgress, [0, 0.04,0.041, 0.07, 0.071, 0.1], [1, 1, -1, -1, 1, 1]);
    const scaleX = useSpring(rawScaleX, {
        stiffness: 300, // Plus bas = plus smooth
        damping: 20,     // Plus haut = moins rebondissant
      });

  return (
    <header className="relative w-full  px-5 pb-15 bg-[url(/assets/bg_sky.webp)] bg-cover backdrop-blur">
        <div className="flex">
            <img 
                className="max-w-full w-[154px] w-[] block z-10"
                src="/hp/assets/title-vertical.png" alt="title" height="492" width="154"/>
            <img src="/hp/assets/spy_dance_1.webp " className="max-w-full h-fit block z-10" alt="spys" height="306" width="400"/>
        </div>
        <img 
            src="/hp/assets/main_title.webp" 
            alt="subtitle"
            className="max-w-full h-fit block mx-auto" 
        />
        <motion.img src="/hp/assets/UFO_header.webp" alt="ufo background" 
            className="absolute top-0 right-0 z-0 object-contain shrink-0"
            style={{
                width: 200,
                height: "auto",
                x,
                y,
                scaleX
              }}
        />
    </header>
  )
}

export default Header