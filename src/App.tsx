import './App.css'
import Menu from './components/Menu'
import Characters from './sections/Characters'
import Faq from './sections/Faq'
import Footer from './sections/Footer'
import Header from './sections/Header'
import News from './sections/News'
import Synopsis from './sections/Synopsis'
import Trivia from './sections/Trivia'
// import Video from './sections/Video'
import Youtube from './sections/Youtube'

function App() {

  return (
    <div id='wrapper'
    className='max-w-[430px]  mx-auto w-screen h-fit overflow-x-hidden'
    >
      <div className='bg-[url(/assets/comingsoon.webp)] bg-cover w-screen h-screen fixed -z-1 left-0'></div>
      <div className='w-full h-full block z-10'>
        <Menu />
        <Header />
        <Youtube />
        <div　className='bg-[url(/assets/bg_sky.webp)] bg-cover'>
          <Synopsis />
          <News />
        </div>
        <Characters />
        {/* <Video /> */}
        <Trivia />
        <Faq />
        <Footer />
      </div>
    </div>
  )
}

export default App
