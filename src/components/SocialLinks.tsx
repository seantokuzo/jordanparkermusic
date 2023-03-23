import { FaSoundcloud } from 'react-icons/fa'
import { SiYoutubemusic } from 'react-icons/si'
import { footerLinks } from '../constants/footerLinks'

const socialThumbnails = [
  {
    link: 'spotify',
    url: footerLinks.spotify
  },
  {
    link: 'appleMusic',
    url: footerLinks.appleMusic
  },
  {
    link: 'amazon',
    url: footerLinks.amazonMusic
  },
  {
    link: 'youtubemusic',
    url: footerLinks.youtubeMusic
  },
  { link: 'soundcloud', url: footerLinks.soundcloud },
  { link: 'youtube', url: footerLinks.youtube },
  { link: 'instagram', url: footerLinks.instagram }
  // { link: 'facebook', url: footerLinks },
  // { link: 'twitter', url: footerLinks }
]

const SocialLinks = () => {
  return (
    <div
      className="w-full relative
        flex flex-wrap justify-center items-center"
    >
      {socialThumbnails.map((social) => (
        <a
          href={social.url}
          key={social.link}
          className="hover:scale-110 transition-all"
          target="_blank"
          rel="noreferrer noopener"
          title={
            social.link === 'youtubemusic'
              ? 'Youtube Music'
              : social.link === 'appleMusic'
              ? 'Apple Music'
              : social.link === 'amazon'
              ? 'Amazon Music'
              : social.link === 'soundcloud'
              ? 'SoundCloud'
              : social.link.slice(0, 1).toUpperCase() + social.link.slice(1)
          }
        >
          {social.link === 'soundcloud' ? (
            <div
              className="w-10 h-10 sm:w-[2.35rem] sm:h-[2.35rem] md:w-12 md:h-12
                mx-2 mt-3 sm:mx-4 sm:mt-4 md:mt-4
                flex flex-col justify-center items-center
                bg-white text-black rounded-full
                text-2xl lg:text-3xl
                hover:scale-110 transition-all"
            >
              <FaSoundcloud />
            </div>
          ) : social.link === 'youtubemusic' ? (
            <div
              className="w-10 h-10 sm:w-[2.35rem] sm:h-[2.35rem] md:w-12 md:h-12
                mx-2 mt-3 sm:mx-4 sm:mt-4 md:mt-4
                flex flex-col justify-center items-center
                bg-white text-black rounded-full
                text-2xl lg:text-3xl
                hover:scale-110 transition-all"
            >
              <SiYoutubemusic />
            </div>
          ) : (
            <img
              className="w-10 h-10 sm:w-[2.35rem] sm:h-[2.35rem] md:w-12 md:h-12
                mx-2 mt-3 sm:mx-4 sm:mt-4 md:mt-4
                hover:scale-110 transition-all"
              src={`/img/social-icons/${social.link}.svg`}
              decoding="async"
              loading="lazy"
              alt={`${social.link} icon`}
              data-recalc-dims="1"
            ></img>
          )}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
