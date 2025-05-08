import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Characters = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0.5, 1], [0, -100]); // part vers la gauche
  const x2 = useTransform(scrollYProgress, [0.5, 1], [0, -50]);
  const x3 = useTransform(scrollYProgress, [0.5, 1], [0, -25]);
  const x4 = useTransform(scrollYProgress, [0.5, 1], [0, 50]);  // part vers la droite
  const x5 = useTransform(scrollYProgress, [0.5, 1], [0, 100]);

  return (
    <section  className='bg-[rgb(0,164,245)] w-full flex flex-col items-cente pb-10 relative' id="character">

        <div className="w-8/10 mx-auto my-30 shadow-[8px_8px_0_#370617] bg-white rounded-lg">
            <p className="text-center py-4 font-ufo text-5xl text-[#FDD717]"
              style={{ textShadow: '0px 4px 0 rgba(55, 6, 23, 1)' }}>
              キャラクター
            </p>
          </div>

        <p className="font-ufo text-4xl text-white pl-5 pb-5">ブラ</p>
        <div className="bg-[#FDD717] w-9/10 font-yusei rounded-br-4xl py-5 relative mb-30">
          <p className="w-7/10 px-5 pb-2 text-sm">
            ありとあらゆるスパイ技術を体得し身体的能力に秀でた知的 生命体。普段はおっとりしているが興奮状態に入ると、誰も手 が付けられない凶暴さ見せることも!  食欲・性欲・睡眠欲を兼ね備えた超エリート。見た目とは裏腹に 超能力やテレパシーを使いこなす。
          </p>
          <img className="ml-2" src="/hp/assets/pres_bura.png" alt="bura" height={117} width={282}/>
          <img className="absolute -top-1/4 -right-1/2" src="/hp/assets/bura_front.webp" alt="bura" height={420} width={350}/>
        </div>

        <p className="font-ufo text-4xl text-white px-5 pb-5 ml-auto">スッピ</p>
        <div className="bg-[#FDD717] w-9/10 font-yusei rounded-bl-4xl py-5 relative mb-30 ml-auto">
          <p className="w-7/10 px-5 pb-2 text-sm ml-auto">
          ありとあらゆるスパイ技術を体得し知的能力に秀でた知的生命体。 性格的にせっかちな面があり神経質。 知的指数は高いのだが、咄嗟の判断に脆い面あり。 見た目とは裏腹に超能力やテレパシーを使いこなす。
          </p>
          <img className="ml-auto px-2" src="/hp/assets/pres_suppi.webp" alt="suppi" height={117} width={282}/>
          <img className="absolute -top-1/2 -left-1/2" src="/hp/assets/suppi_front.webp" alt="suppi" height={420} width={350}/>
        </div>

        <p className="font-ufo text-4xl text-white pl-5 pb-5">OYAKATA</p>
        <div className="bg-[#FDD717] w-9/10 font-yusei rounded-br-4xl py-5 relative">
          <p className="w-7/10 px-5 pb-2 text-sm">
          基本、脇役だが、時代を問わず建築現場を切り盛りする親分的存在。 時に主役を射止めてしまうほどの存在感は、それもまた人生、その ありがたみを教えてくれる。
          </p>
          <img className="ml-2" src="/hp/assets/pres_oyakata.webp" alt="bura" height={117} width={282}/>
          <img className="absolute -top-1/2 -right-1/2" src="/hp/assets/oyakata_front.webp" alt="bura" height={420} width={350}/>
        </div>

        <img src="/hp/assets/arrow.svg" alt="arrow" className="absolute  bottom-0 z-5" />

        <ul ref={ref} className="font-alpha text-white text-5xl block z-10 w-full text-center mt-20">
          <motion.li style={{ x: x1 }} className="">TRIVIA</motion.li>
          <motion.li style={{ x: x2 }} className="">TRIVIA</motion.li>
          <motion.li style={{ x: x3 }} className="">TRIVIA</motion.li>
          <motion.li style={{ x: x4 }} className="">TRIVIA</motion.li>
          <motion.li style={{ x: x5 }} className="">TRIVIA</motion.li>
        </ul>
        
        <img src="/hp/assets/group_cloud.webp" alt="group on the cloud" className="absolute shrink-0 object-contain bottom-0 z-10 translate-y-1/4" width={440} height={234}/>

    </section>
  )
}

export default Characters