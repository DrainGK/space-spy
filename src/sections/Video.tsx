
const Video = () => {
  return (
    <section className="w-full flex flex-col items-center py-30 relative">
        <img src="/assets/video_title.webp" alt="video title" height={259} width={259} className="mt-10 mb-30 block z-10"/>
        <img src="/assets/spy_cloud.webp" alt="burasuppi cloud" className="absolute left-0 top-0 translate-y-1/2"/>
        <img src="/assets/cloud.webp" alt="cloud" className="absolute right-0 top-0 translate-y-full"/>
        <div className="w-full relative z-10 flex justify-center">
            <video
                className="w-[373px] h-[667px] rounded-2xl shadow-[8px_8px_0_#370617] block z-10"
                src={"/assets/Bura_n_Sutpi_PV_New_v01.mp4"}
                controls
            >
            </video>

            <img src="/assets/star.webp" alt="star" className="absolute -translate-y-1/2 left-0 top-0 z-5"/>
            <img src="/assets/spys_star.webp" alt="burasuppi star" className="absolute -translate-y-2/3 right-0 top-0 z-5"/>
        </div>
    </section>
  )
}

export default Video