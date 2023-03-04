import { useState } from 'react'
// import { useAppContext } from '../context/appContext'

// const spotifyLinks = []
// const itunesLinks = []
// const amazonMusicLinks = []
// const soundcloudLinks = []

type MusicPlayer = 'Spotify' | 'Apple Music' | 'Amazon Music' | 'SoundCloud'

const Listen = () => {
  // const { windowSize } = useAppContext()
  const [musicPlayer, setMusicPlayer] = useState<MusicPlayer>('Spotify')

  const musicPlayerSelector = (player: MusicPlayer) => {
    return (
      <div
        className={`w-max mx-3 px-3 py-1 ${
          musicPlayer === player ? 'bg-white text-black rounded-md' : ''
        }
          cursor-pointer`}
        onClick={() => setMusicPlayer(player)}
      >
        {player}
      </div>
    )
  }

  return (
    <div
      className="relative
      w-[80%] max-w-2xl mt-24 sm:mt-28 md:mt-20 mb-10
      flex flex-col justify-center items-center"
    >
      <div
        className="mb-8
        text-xs sm:text-sm md:text-base lg:text-lg
        flex flex-wrap justify-center items-center"
      >
        {musicPlayerSelector('Spotify')}
        {musicPlayerSelector('Apple Music')}
        {musicPlayerSelector('Amazon Music')}
        {musicPlayerSelector('SoundCloud')}
      </div>
      {/* {musicPlayer === 'Spotify' &&
        spotifyLinks.map((link) => {
          return (
            <iframe
              className="w-full min-h-[16rem]
              mb-2 last:mb-0
              rounded-2xl z-50"
              src={link}
              key={link.split('track/')[1].split('?')[0]}
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )
        })} */}
      {/* {musicPlayer === 'Apple Music' &&
        itunesLinks.map((link) => {
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
        })} */}
      {/* {musicPlayer === 'Amazon Music' &&
        amazonMusicLinks.map((link) => {
          return (
            <iframe
              className="w-full min-h-[21rem] md:min-h-[13rem] mb-16 last:mb-0 rounded-xl"
              key={link}
              src={link}
            ></iframe>
          )
        })} */}
      {/* {musicPlayer === 'SoundCloud' &&
        soundcloudLinks.map((link) => {
          return (
            <iframe
              className="w-full mb-16 last:mb-0 rounded-lg"
              allow="autoplay"
              src={link}
            ></iframe>
          )
        })} */}
    </div>
  )
}

export default Listen
