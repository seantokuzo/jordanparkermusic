import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import { gsap } from 'gsap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { windowSize } = useAppContext()

  const contactRef = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(contactRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.contact-anim'), {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      ease: 'power1.out'
    })
  }, [])

  return (
    <div
      className={`w-[80%] max-w-xl min-h-[60vh]
      lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-60%]
      flex flex-col justify-center items-center
      rounded-md
      ${
        windowSize.height >= 746 && windowSize.width > 420
          ? 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mt-0'
          : 'mt-20 '
      }
      bg-cover bg-center`}
      ref={contactRef}
      style={
        windowSize.width > 0 ? { backgroundImage: 'url(/img/jp-contact.jpg' } : {}
        // : { backgroundImage: 'url(/img/jp-profile.jpg' }
      }
    >
      <form
        className={`w-full md:w-[90%] max-w-md p-4 sm:p-6
        rounded-lg ${windowSize.width > 428 && 'bg-black/[0.65]'}
        flex flex-col justify-center items-center title-font`}
        name="contact"
        // action="https://formsubmit.co/s.kuzo86@gmail.com"
        action="https://formsubmit.co/jordanparkersmith44@gmail.com"
        method="POST"
      >
        <h3 className="text-2xl text-center title-font contact-anim">Contact Me</h3>
        <label htmlFor="name" className="mt-2 capitalize contact-anim">
          name
        </label>
        <input
          className={`w-full rounded-sm text-center contact-anim text-black py-1`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          max={40}
          min={1}
          name="name"
          required
        />
        <label htmlFor="email" className="mt-2 capitalize contact-anim">
          email
        </label>
        <input
          className={`w-full rounded-sm text-center contact-anim text-black py-1`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
        <label htmlFor="message" className="mt-2 capitalize contact-anim">
          message
        </label>
        <textarea
          className={`w-full rounded-sm h-24 contact-anim text-black py-1 px-2`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          minLength={10}
          maxLength={400}
          required
        />
        <input
          type="hidden"
          name="_next"
          // TODO - change link once live
          value="https://jordanparkermusic.com/thankyou"
          // value="http://localhost:5150/thankyou"
        ></input>
        <button
          type="submit"
          className="mt-4 px-6 py-3
          bg-black border-2 rounded-md
          text-xl text-white uppercase
          hover:scale-110 contact-anim"
        >
          send message
        </button>
      </form>
      <Outlet />
    </div>
  )
}

export default Contact
