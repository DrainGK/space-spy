
const Characters = () => {
  return (
    <section className='bg-[#00A4F5] w-full flex flex-col items-cente pt-20 pb-10 relative'>
        <img src="/assets/character_title.png" alt="title" className="block z-5"/>
        <img src="/assets/bura_pres.webp" alt="bura" className="block z-5"/>
        <img className='mb-30block z-5' src="/assets/suppi_pres.webp" alt="supi"/>
        <img src="/assets/oyakata_pres.webp" alt="oyakata" className="block z-10"/>
        <img src="/assets/arrow.svg" alt="arrow" className="absolute  bottom-0 z-5" />

        <ul className="font-alpha text-white text-5xl block z-10 w-full text-center mt-20">
          <li className="ml-18">TRIVIA</li>
          <li className="ml-10">TRIVIA</li>
          <li className="ml-2">TRIVIA</li>
          <li className="mr-2">TRIVIA</li>
          <li className="mr-10">TRIVIA</li>
        </ul>

        <div className="flex z-10 absolute bottom-0 translate-y-1/3">
          <img src="/assets/granma.webp" alt="grandma" width={107} height={168}/>
          <img src="/assets/grandpa.webp" alt="grandpa" width={205} height={216}/>
          <img src="/assets/oyakata_cloud.webp" alt="oyakata on the cloud" width={134} height={206}/>
        </div>

    </section>
  )
}

export default Characters