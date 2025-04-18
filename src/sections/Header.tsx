
const Header = () => {
  return (
    <header className="relative w-full px-5 pb-15">
        <div className="flex">
            <img 
                className="max-w-full h-fit block z-10"
                src="/assets/title-vertical.png" alt="title" height="153.55" width="492"/>
            <img src="/assets/spy_dance_1.png " className="max-w-full h-fit block z-10" alt="spys" height="306" width="400"/>
        </div>
        <img 
            src="/assets/subtitle.png" 
            alt="subtitle"
            className="max-w-full h-fit block mx-auto" 
        />
        <img src="/assets/UFO_header.png" alt="ufo background" 
            className="absolute top-0 right-0 z-0"
        />
    </header>
  )
}

export default Header