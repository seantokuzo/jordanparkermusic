import SocialLinks from '../components/SocialLinks'
import { useAppContext } from '../context/appContext'

const Home = () => {
  const { windowSize } = useAppContext()

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {windowSize.width < 1024 ? (
        <div className="w-full">
          <img src="/img/jp-bg.jpg" />
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <iframe
            className="w-full min-h-screen"
            src="https://www.youtube.com/embed/PE44II_Vq4U?autoplay=1&mute=1&amp;controls=0&amp;disablekb=1&amp;fs=0&amp;iv_load_policy=3&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fjordanparkermusic.com&amp;widgetid=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      )}
      <div className="w-[80%] mt-6">
        <SocialLinks />
      </div>
      <div
        className="w-full pt-10 md:py-20
        flex flex-col md:flex-row justify-center items-center z-100
        bg-jpBg"
      >
        <article className="md:w-1/2 h-full flex flex-col justify-center items-center md:items-end">
          <div className="w-[90%] md:w-3/4 px-10 md:px-24 p-10 md:py-0 h-auto md:h-[600px] bg-jpOverlay flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center font-bold">Jordan Parker</h2>
            <h3 className="mt-8 text-xxs sm:text-xs md:text-sm text-center">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
          <div
            className="w-[90%] md:w-3/4 my-10 md:my-0 h-[400px] md:h-[600px] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage:
                'url(https://static.wixstatic.com/media/425622_312639597c9f410b9048c39ba59ab971~mv2.jpg/v1/fill/w_863,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/425622_312639597c9f410b9048c39ba59ab971~mv2.jpg)'
            }}
            // src="https://static.wixstatic.com/media/425622_312639597c9f410b9048c39ba59ab971~mv2.jpg/v1/fill/w_863,h_640,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/425622_312639597c9f410b9048c39ba59ab971~mv2.jpg"
            // alt="Image of Jordan Parker"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Home
