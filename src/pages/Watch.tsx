import { watchLinks } from '../constants/watchLinks'
import { useAppContext } from '../context/appContext'

const Watch = () => {
  const { windowSize } = useAppContext()

  return (
    <div
      className="w-[90%] mt-24
      flex flex-col justify-center items-center"
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
              : windowSize.width < 5000
              ? 'w-[1120px] h-[630px]'
              : ''
          } mt-10`}
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
