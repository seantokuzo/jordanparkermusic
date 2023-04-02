import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'
import { useAppContext } from '../context/appContext'
import { gsap } from 'gsap'

const Home = () => {
  const { windowSize } = useAppContext()
  const homeRef = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(homeRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.home-anim'), {
      opacity: 0,
      y: -10,
      stagger: 0.15,
      ease: 'power1.out'
    })
  }, [])

  return (
    <div className="w-full lg:mt-24 flex flex-col justify-center items-center" ref={homeRef}>
      {windowSize.width < 1024 ? (
        <div className="w-full home-anim">
          <img src="/img/jp-bg.jpg" />
        </div>
      ) : (
        <div className="w-full max-w-4xl flex flex-col justify-center items-center home-anim">
          <iframe
            className={`${
              windowSize.width < 1200
                ? 'w-[840px] h-[473px]'
                : windowSize.width < 5000
                ? 'w-[1120px] h-[630px]'
                : ''
            }`}
            src="https://www.youtube.com/embed/PE44II_Vq4U?autoplay=1&mute=1&amp;disablekb=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fjordanparkermusic.com&amp;widgetid=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
      <div
        className={`${
          windowSize.width < 360 ? 'w-[80%]' : windowSize.width < 500 ? 'w-[65%]' : 'w-[80%]'
        } mt-6 lg:mt-10 home-anim`}
      >
        <SocialLinks />
      </div>
      {/* BIO + IMAGE */}
      <div
        className="w-full lg:max-w-[80%] xl:w-[90%] xl:max-w-7xl pt-10 md:py-20 xl:py-10
        flex flex-col xl:flex-row justify-center xl:justify-evenly items-center z-100"
      >
        {/* BIO */}
        <article className="w-[90%] xl:w-[50%] xl:h-[450px] py-10 xl:py-0 bg-jpOverlay flex flex-col justify-center items-center home-anim">
          <div className="w-[80%] xl:w-[90%] max-w-md lg:max-w-lg xl:max-w-2xl flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center font-bold title-font tracking-wide">
              Jordan Parker
            </h2>
            <h3 className="mt-8 text-xs sm:text-sm md:text-base text-center">
              LA born, Portland raised, Jordan Parker brings a mix of R&B, soul to the pop scene.
              Beyond his head turning, powerhouse voice and his mysterious on-stage charisma, Jordan
              is a natural born songwriter and an undeniably talented lead guitarist. His style,
              inspiration, and finely tuned ear were passed down to him by his late father who was
              the lead mixer for icons such as Luther Vandross, Stevie Wonder, and Earth Wind &
              Fire. Growing up at the concerts and in the mixing booths of these legends of soul,
              pop, and funk, Jordan developed a seductive tone and a knack for melody that moves
              your body and mind.
            </h3>
          </div>
        </article>
        {/* IMAGE */}
        <div className="w-[90%] xl:w-[50%] flex flex-col justify-center items-center">
          <img
            className="w-full xl:h-[450px] mt-10 xl:mt-0"
            src="https://static.wixstatic.com/media/425622_312639597c9f410b9048c39ba59ab971~mv2.jpg/v1/fill/w_863,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/425622_312639597c9f410b9048c39ba59ab971~mv2.jpg"
            alt="Image of Jordan Parker"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
