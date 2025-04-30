
const Header = () => {
  return (
    <header className="relative w-full px-5 pb-15 bg-[url(/assets/bg_sky.webp)] bg-cover backdrop-blur">
        <div className="flex">
            <img 
                className="max-w-full h-fit block z-10"
                src="/assets/title-vertical.webp" alt="title" height="153.55" width="492"/>
            <img src="/assets/spy_dance_1.webp " className="max-w-full h-fit block z-10" alt="spys" height="306" width="400"/>
        </div>
        <img 
            src="/assets/main_title.webp" 
            alt="subtitle"
            className="max-w-full h-fit block mx-auto" 
        />
        <img src="/assets/UFO_header.webp" alt="ufo background" 
            className="absolute top-0 right-0 z-0"
        />
    </header>
  )
}

export default Header