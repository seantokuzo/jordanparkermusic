// import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Home, Listen, Watch, Contact, ThankYou, NotFound } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import Blogs from './pages/Blogs'
// import { useAppContext } from './context/appContext'

function App() {
  // const { darkMode, changeWindowSize } = useAppContext()
  const { pathname } = useLocation()

  // // TRACK WINDOW SIZE AND FIX SHITTY MOBILE VIEWPORT HEIGHT
  // useEffect(() => {
  //   // SET vh CSS variable
  //   const vh = window.innerHeight * 0.01
  //   document.documentElement.style.setProperty('--vh', `${vh}px`)
  //   // DEFINE LISTENER
  //   const resizeListener = () => {
  //     changeWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     })
  //     const vhNew = window.innerHeight * 0.01
  //     document.documentElement.style.setProperty('--vh', `${vhNew}px`)
  //   }
  //   // ADD LISTENER
  //   window.addEventListener('resize', resizeListener)
  //   // CLEANUP LISTENER
  //   return () => window.removeEventListener('resize', resizeListener)
  //   // eslint-disable-next-line
  // }, [])

  // IF USING DARKMODE
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark-mode')
  //   } else {
  //     document.body.classList.remove('dark-mode')
  //     return
  //   }
  // }, [darkMode])

  return (
    <main
      className={`w-full min-h-screen
      bg-jpBg text-white
      flex flex-col items-center`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listen" element={<Listen />} />
        <Route path="watch" element={<Watch />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pathname !== '/' && <Footer />}
    </main>
  )
}

export default App
