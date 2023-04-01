import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { windowSize } = useAppContext()

  return (
    <div
      className={`w-[80%] max-w-6xl min-h-[60vh]
      lg:absolute lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-60%]
      flex flex-col justify-center items-center
      rounded-md
      ${
        windowSize.height >= 746 && windowSize.width > 420
          ? 'absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mt-0'
          : 'mt-20 '
      }
      bg-no-repeat bg-cover bg-center`}
      style={
        windowSize.width > 428 ? { backgroundImage: 'url(/img/jp-cig.jpg' } : {}
        // : { backgroundImage: 'url(/img/jp-profile.jpg' }
      }
    >
      <form
        className={`w-full md:w-[90%] max-w-md p-4 sm:p-6
        rounded-lg ${windowSize.width > 428 && 'bg-black/[0.65]'}
        flex flex-col justify-center items-center`}
        name="contact"
        // action="https://formsubmit.co/"
        // method="POST"
      >
        <h3 className="text-2xl text-center">Contact Me</h3>
        <label htmlFor="name" className="mt-2 capitalize">
          name
        </label>
        <input
          className={`w-full rounded-sm text-center`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          max={40}
          min={1}
          name="name"
          required
        />
        <label htmlFor="email" className="mt-2 capitalize">
          email
        </label>
        <input
          className={`w-full rounded-sm text-center`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
        />
        <label htmlFor="message" className="mt-2 capitalize">
          message
        </label>
        <textarea
          className={`w-full rounded-sm h-24`}
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
          value="https://localhost:5150/thankyou"
        ></input>
        <button
          type="submit"
          className="mt-4 px-6 py-3
          bg-kuzoPurp sh-gold border-kuzoPurp border-2 rounded-md
          text-xl text-white uppercase
          hover:scale-110 transition-all"
        >
          send message
        </button>
      </form>
      <Outlet />
    </div>
  )
}

export default Contact
