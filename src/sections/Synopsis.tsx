import React from 'react'

const Synopsis: React.FC = () => {
  return (
    <section className=' bg-[#FFBA08] pt-15 pb-50'>
        <div className='relative h-[284px] w-full flex items-center justify-center mb-15'>
            <h2 className='text-white  font-ufo text-7xl/25 text-shadow-[0px_4px_0_rgba(55,6,23,1)] block z-10'>あら<br />すじ</h2>
            <img className='absolute w-[284px] h-[282px] object-cover z-5' src="/assets/Star_1.png" alt="" />
            <img className='absolute top-0 left-0 block -translate-x-1/10' src="/assets/spy_1.png" alt="spy 1" />
            <img className='absolute top-0 right-0 block z-10 translate-y-1/4' src="/assets/spy_2.png" alt="spy 2" />
        </div>
        <p className='text-[#370617] text-center text-xl sm:text-2xl font-ufo'>
            遥か8万光年彼方のファンデ星から<br />
            やってきた知的生命体のブラとスピ。<br />
            厳しいスパイ養成訓練を体得した彼は<br />
            地球のとある情報を搾取すべく<br />
            人類に近づいた。<br />
            はたして、彼らの真の目的とは？<br />
            そして、地球の運命はいかに!
        </p>
    </section>
  )
}

export default Synopsis