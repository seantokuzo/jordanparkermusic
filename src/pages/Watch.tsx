import { watchLinks } from '../constants/watchLinks'
// import { useAppContext } from '../context/appContext'

const Watch = () => {
  // const { windowSize } = useAppContext()

  return (
    <div
      className="w-full mt-20
      flex flex-col justify-center items-center"
    >
      {watchLinks.map((link) => (
        <iframe
          className="max-w-full w-[560px] h-[315px] mt-6"
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
