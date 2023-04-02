import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Page = '/' | 'listen' | 'watch' | 'blogs' | 'contact'

const Header = () => {
  const { windowSize } = useAppContext()
  const { pathname } = useLocation()

  const headerRef = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(headerRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.header-anim'), {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      ease: 'power1.out'
    })
  }, [])

  const linkFactory = (page: Page) => {
    const pagePath = page === '/' ? page : '/' + page
    return (
      <Link
        to={page}
        className={`mx-2 md:mx-4
        text-xs sm:text-sm md:text-base lg:text-lg title-font
        ${pathname === pagePath && 'underline font-bold'} capitalize header-anim`}
      >
        {page === '/' ? 'Home' : page}
      </Link>
    )
  }

  return (
    <header
      className={`w-full absolute top-0 py-5
      z-50 bg-jpBg
      flex ${windowSize.width < 360 ? 'justify-center' : 'justify-between'} items-center`}
      ref={headerRef}
    >
      {windowSize.width < 640 && windowSize.width >= 360 && (
        <div
          className="w-12 h-12 ml-4 rounded-full bg-cover bg-no-repeat bg-center text-xxs flex justify-center items-center header-anim"
          style={{
            backgroundImage:
              'url(https://static.wixstatic.com/media/425622_9e005c72ce634b4f8c991c2648ad0f4d~mv2.jpeg/v1/fill/w_1335,h_943,fp_0.50_0.47,q_85,usm_0.66_1.00_0.01,enc_auto/425622_9e005c72ce634b4f8c991c2648ad0f4d~mv2.jpeg)'
          }}
        ></div>
      )}
      {windowSize.width >= 640 && (
        <h1 className="text-4xl ml-8 title-font header-anim">JORDAN PARKER</h1>
      )}
      <div className="w-fit flex justify-end items-center pr-4 md:pr-6">
        <div className="flex justify-end items-center">
          {linkFactory('/')}
          {linkFactory('listen')}
          {linkFactory('watch')}
          {linkFactory('blogs')}
          {linkFactory('contact')}
        </div>
        {/* {themeToggle} */}
      </div>
    </header>
  )
}

export default Header
