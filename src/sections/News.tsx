import { li } from 'framer-motion/client'
import React from 'react'

const News = () => {

    const news = [
        {
            date: "2025/03/25",
            title: "Title title title",
            text: "門トナ馬文るげゆ政曜きへ知裁ヱ阪文ぱ闘部支起ノマ打今どがこ在求ぜぱ益堂ぎスぽけ権見せびまリ部残ぴレはき本自ねざ見部携傾吹はん。消ナセモム鎌説ふぶそイ盆王書苦レト戦35髪しほりの新全大スレニフ保週売ミテヨ北持ワモテ式規テ程火違奇拝ぜぎす..."
        },
        {
            date: "2025/03/25",
            title: "Title title title",
            text: "門トナ馬文るげゆ政曜きへ知裁ヱ阪文ぱ闘部支起ノマ打今どがこ在求ぜぱ益堂ぎスぽけ権見せびまリ部残ぴレはき本自ねざ見部携傾吹はん。消ナセモム鎌説ふぶそイ盆王書苦レト戦35髪しほりの新全大スレニフ保週売ミテヨ北持ワモテ式規テ程火違奇拝ぜぎす..."
        },
        {
            date: "2025/03/25",
            title: "Title title title",
            text: "門トナ馬文るげゆ政曜きへ知裁ヱ阪文ぱ闘部支起ノマ打今どがこ在求ぜぱ益堂ぎスぽけ権見せびまリ部残ぴレはき本自ねざ見部携傾吹はん。消ナセモム鎌説ふぶそイ盆王書苦レト戦35髪しほりの新全大スレニフ保週売ミテヨ北持ワモテ式規テ程火違奇拝ぜぎす..."
        },
    ]
    
  return (
    <section className='bg-[#DC2F02] py-10 flex flex-col items-center relative'>
        <img src="/assets/news_title.png" alt="news title" className='mb-30 block z-10'/>
        <ul className='w-9/10 flex flex-col gap-y-5'>
            {news.map((item, index)=>(
                <li className='flex flex-col gap-y-2'>
                    <div className='flex justify-between text-white text-xs font-ufo'>
                        <p>{item.date}</p>
                        <p>{item.title}</p>
                    </div>
                    <p className='font-ufo text-[#370617] text-xs bg-[#FFBA08] rounded-sm py-3 px-5 shadow-[8px_8px_0_#370617]'>
                        {item.text}
                    </p>
                </li>
            ))}
        </ul>
        <p className='font-ufo text-2xl text-white mt-10'>more...</p>
        <img className='absolute z-1 top-0 left-0 -translate-x-1/4 -translate-y-1/3' src="/assets/planet_3.png" alt="" />
        <img className='absolute z-5 top-0 left-0 -translate-x-1/3 -translate-y-3/4' src="/assets/spy_2_2.png" alt="" />
        <img className='absolute z-5 top-0 right-0 translate-x-3/5 -translate-y-3/5' src="/assets/spy_1_2.png" alt="" />
    </section>
  )
}

export default News