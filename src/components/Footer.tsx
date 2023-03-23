import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/appContext'
import SocialLinks from './SocialLinks'

const Footer = () => {
  const { windowSize } = useAppContext()
  const { pathname } = useLocation()

  return (
    <footer
      className={`w-full py-4 lg:py-6
      flex flex-col justify-center items-center`}
    >
      {pathname !== '/' && <SocialLinks />}
      <p className="mt-6 text-xxs sm:text-xs">
        Copyright © 2023 · All Rights Reserved · Jordan Parker
      </p>
    </footer>
  )
}

export default Footer
