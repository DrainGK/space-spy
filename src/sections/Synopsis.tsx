import React from 'react'

const Synopsis: React.FC = () => {
  return (
    <section className='pt-15 pb-50' id='arasuji'>
        <div className='relative h-[284px] w-full flex items-center justify-center mb-15'>
            <h2 className='text-white  font-ufo text-7xl/25 text-shadow-[0px_4px_0_rgba(55,6,23,1)] block z-10'>あら<br />すじ</h2>
            <img className='absolute w-[195px] h-[198px] object-cover z-5 shrink-0' src="/assets/planet_2.webp" alt="" />
            <img className='absolute w-[295px] h-[340px] top-0 left-1/12 block -translate-y-1/4 -translate-x-1/10 shrink-0' src="/assets/spy_1.webp" alt="spy 1" />
            <img className='absolute w-[150px] h-[207px] top-0 right-0 block z-10 translate-y-1/4 shrink-0' src="/assets/spy_2.webp" alt="spy 2" />
        </div>
        <p className='text-white max-w-9/10 mx-auto text-center text-lg sm:text-xl font-yusei '>
            遥か8万光年彼方の<span className='text-[#FFBA08]'>ファンデ星から</span><br />
            やってきた知的生命体の<span className='text-[#FFBA08]'>ブラとスッピ</span>。<br />
            厳しい<span className='text-[#FFBA08]'>スパイ</span>養成訓練を体得した彼は<br />
            地球の<span className='text-[#FFBA08]'>とある情報</span>を搾取すべく<br />
            人類に近づいた。<br />
            はたして、彼らの真の目的とは？<br />
            そして、地球の運命はいかに!
        </p>
    </section>
  )
}

export default Synopsis