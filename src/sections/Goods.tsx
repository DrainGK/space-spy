

const Goods = () => {
  return (
    <section
        className='w-full bg-[#FDD717] py-20 flex flex-col items-center'
        id='goods'
    >
        <h2 className='text-white text-center font-ufo text-7xl/25 text-shadow-[0px_4px_0_rgba(55,6,23,1)] block z-10'>GOODS</h2>
        <img src="/hp/assets/spy_dance_1.webp " className="max-w-full mx-auto my-10 h-fit block z-10" alt="spys" height="153" width="200"/>
        <button
            className='bg-[#370617] text-white text-4xl font-alpha py-5 px-15 rounded-full'
        >Buy now</button>
    </section>
  )
}

export default Goods