import { useEffect, useRef } from 'react'
import { watchLinks } from '../constants/watchLinks'
import { useAppContext } from '../context/appContext'
import { gsap } from 'gsap'

const Watch = () => {
  const { windowSize } = useAppContext()

  const watchRef = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(watchRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.watch-anim'), {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.05,
      ease: 'power1.out'
    })
  }, [])

  return (
    <div
      className="w-[90%] mt-24
      flex flex-col justify-center items-center"
      ref={watchRef}
    >
      {watchLinks.map((link) => (
        <iframe
          className={`max-w-full ${
            windowSize.width <= 428
              ? 'w-[420px] h-[236px]'
              : windowSize.width <= 584
              ? 'w-[560px] h-[315px]'
              : windowSize.width < 1024
              ? 'w-[700px] h-[394px]'
              : windowSize.width < 1200
              ? 'w-[840px] h-[473px]'
              : 'w-[1120px] h-[630px]'
          } mt-10 watch-anim`}
          // className="max-w-full w-[560px] h-[315px] mt-6"
          src={link}
          key={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ))}
    </div>
  )
}

export default Watch
