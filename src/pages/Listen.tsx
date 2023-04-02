import { useEffect, useRef, useState } from 'react'
import {
  spotifyEmbedLinks,
  appleMusicEmbedLinks,
  amazonMusicEmbedLinks,
  soundCloudEmbedLinks
} from '../constants/listenLinks'
import { gsap } from 'gsap'
// import { useAppContext } from '../context/appContext'

type MusicPlayer = 'Spotify' | 'Apple Music' | 'Amazon Music' | 'SoundCloud'

const Listen = () => {
  // const { windowSize } = useAppContext()
  const [musicPlayer, setMusicPlayer] = useState<MusicPlayer>('Spotify')

  const listenRef = useRef<HTMLDivElement>(null)
  const q = gsap.utils.selector(listenRef)
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(q('.listen-anim'), {
      opacity: 0,
      y: -20,
      stagger: 0.05,
      ease: 'power1.out'
    })
  }, [])

  const musicPlayerSelector = (player: MusicPlayer) => {
    return (
      <div
        className={`w-fit first:ml-0 last:mr-0 mx-3 my-1 px-3 py-2 title-font ${
          musicPlayer === player ? 'bg-white text-black rounded-md' : ''
        }
          cursor-pointer listen-anim`}
        onClick={() => setMusicPlayer(player)}
      >
        {player}
      </div>
    )
  }

  return (
    <div
      className="w-[80%] max-w-2xl
      mt-24 sm:mt-28 md:mt-28 mb-10
      flex flex-col justify-center items-center"
      ref={listenRef}
    >
      <div
        className="w-full mb-8
        text-xs sm:text-sm md:text-base lg:text-lg
        flex flex-wrap justify-center items-center"
      >
        {musicPlayerSelector('Spotify')}
        {musicPlayerSelector('Apple Music')}
        {musicPlayerSelector('Amazon Music')}
        {musicPlayerSelector('SoundCloud')}
      </div>
      {/* {musicPlayer === 'Spotify' &&
        spotifyEmbedLinks.map((link) => {
          return (
            <iframe
              className="w-full max-w-[450px] max-h-[100px] border-2
              z-50"
              src={link}
              key={link.split('track/')[1].split('?')[0]}
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              // loading="lazy"
            ></iframe>
          )
        })} */}
      {musicPlayer === 'Spotify' &&
        spotifyEmbedLinks.map((link) => {
          return (
            // <iframe
            //   z-50"
            //   src={link}
            //   key={link.split('track/')[1].split('?')[0]}
            //   allowFullScreen={false}
            //   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            //   // loading="lazy"
            // ></iframe>
            <iframe
              src={link}
              key={link}
              className="w-full max-w-[600px]"
              width="100%"
              height="250"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )
        })}

      {musicPlayer === 'Apple Music' &&
        appleMusicEmbedLinks.map((link) => {
          return (
            <iframe
              className="w-full min-h-[12rem] md:min-h-[12rem] mb-2 sm:mb-4 md:mb-6 last:mb-0 border-xl"
              key={link}
              allowFullScreen={false}
              allow="autoplay *; encrypted-media *;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src={link}
            ></iframe>
          )
        })}
      {musicPlayer === 'Amazon Music' &&
        amazonMusicEmbedLinks.map((link) => {
          return (
            <iframe
              className="w-full min-h-[21rem] md:min-h-[13rem] mb-16 last:mb-0 rounded-xl"
              key={link}
              src={link}
            ></iframe>
          )
        })}
      {musicPlayer === 'SoundCloud' &&
        soundCloudEmbedLinks.map((link) => {
          return (
            <iframe
              src={link}
              key={link}
              className="w-full mb-16 last:mb-0 rounded-lg"
              allow="autoplay"
            ></iframe>
          )
        })}
    </div>
  )
}

export default Listen
