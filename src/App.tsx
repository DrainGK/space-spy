import './App.css'
import Header from './sections/Header'
import News from './sections/News'
import Synopsis from './sections/Synopsis'
import Youtube from './sections/Youtube'

function App() {

  return (
    <div id='wrapper'
    className='max-w-[430px] outline-4 outline-amber-400 mx-auto w-screen h-fit bg-[url(/assets/bg_sky.png)] bg-cover overflow-x-hidden'
    >
      <Header />
      <Youtube />
      <Synopsis />
      <News />
    </div>
  )
}

export default App
