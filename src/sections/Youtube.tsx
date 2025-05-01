import YoutubeCarousel from '../components/YoutubeCarousel'

const Youtube = () => {
  return (
    <section
        className='relative bg-white w-full h-fit flex flex-col justify-center items-center pb-10'
        id='youtube'
    >   
        <img src="/assets/spike_youtube_section.svg" alt="spikes"
            className='absolute top-0 w-full  -translate-y-[70%]'
        />
        <div className='mb-10 mt-15 flex flex-col items-center'>
            <img src="/assets/youtube.webp" alt="" 
            className='w-fit h-fit'/>
            <p className='text-center text-2xl mt-2 text-[#008FF5] font-ufo'>coming soon <br />
            </p>
        </div>
        <YoutubeCarousel />
    </section>
  )
}

export default Youtube