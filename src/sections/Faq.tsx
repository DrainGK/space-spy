import { useState } from "react"

const Faq = () => {
    const [isClick, setIsClick] = useState(false)
    const [currentIndex, setCurrentIndex] = useState<number|null>(null)

    const faq = [
        {
            question: "Q. そもそも見た目がゴリラだし、生き方さえも運命づけられたブラとスッピが可愛そうだと思います。二人に対する人権侵害では？",
            answer: "A. 問題ありません。そもそも知的生命体であり、一度も生物と言及してはおりません。ボールと同じで、打たれたり蹴られたりするのが目的です。",
        },
        {
            question: "Q. 何でブラとスッピは初めての場所に行くのに、周りの親方とかはすっと受け入れているのか？正直よくわからない。",
            answer: "A. あ、それはもうテレパシーとか超能力で相手の記憶を操作できるからです。多分我々は地球人より遥か上の次元なので、そこはもうそういうもんなんだと思ってもらうしかないです。",
        }
    ]

    const handleClick = (index:number)=>{
        setCurrentIndex(index);
        setIsClick(!isClick)
    }

  return (


    <section className="relative w-full flex flex-col items-center bg-[#FFBA08] border-4 border-[#FAA307] py-20" id="question">
        <img src="/hp/assets/bolt_top.svg" alt="bolt top" className="absolute top-0"/>
        <img src="/hp/assets/bolt_top.svg" alt="bolt top" className="absolute bottom-0"/>
        <img src="/hp/assets/faq_title.webp" alt="faq title" />
        <div className="w-full flex flex-col items-center gap-y-10 mt-20">
        {
            faq.map((item,index)=>(
                <div key={index} className="w-9/10 bg-white rounded-2xl p-5 flex flex-col gap-y-4 shadow-[8px_8px_0_#00A4F5]"
                onClick={()=>handleClick(index)}
                >
                    <span className="flex gap-x-3 font-yusei font-bold">
                        <p className=" text-sm text-[#371206]">{item.question}</p>
                        <img src="/hp/assets/arrow_up.svg" alt="arrow up" className={`${isClick && currentIndex === index ? "rotate-180":""}`}/>
                    </span>
                    <p className={` text-sm text-[#373737] ${isClick && currentIndex === index ? "block":"hidden"}`}>{item.answer}</p>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default Faq