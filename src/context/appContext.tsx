import { createContext, useReducer, useContext, useEffect } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'
import { mediaAPI } from '../constants/googleSheetsAPI'

export type WindowSize = { width: number; height: number }

export interface MediaData {
  title: string
  link: string
}

export interface StateInterface {
  // darkMode: boolean
  windowSize: WindowSize
  videoData: MediaData[]
  spotifyData: MediaData[]
  appleMusicData: MediaData[]
  amazonMusicData: MediaData[]
  soundcloudData: MediaData[]
}

export const initialState: StateInterface = {
  // darkMode: true,
  windowSize: { width: window.innerWidth, height: window.innerHeight },
  videoData: [],
  spotifyData: [],
  appleMusicData: [],
  amazonMusicData: [],
  soundcloudData: []
}

interface AppContextInterface extends StateInterface {
  // toggleDarkMode: () => void
  changeWindowSize: (newSize: WindowSize) => void
  // getVideoData: () => void
  // getSpotifyData: () => void
  // getAppleMusicData: () => void
  // getAmazonMusicData: () => void
  // getSoundcloudData: () => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  // toggleDarkMode: () => null,
  changeWindowSize: () => null
  // getVideoData: () => null,
  // getSpotifyData: () => null,
  // getAppleMusicData: () => null,
  // getAmazonMusicData: () => null,
  // getSoundcloudData: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const toggleDarkMode = () => {
  //   dispatch({ type: ActionType.TOGGLE_DARK_MODE })
  // }

  const changeWindowSize = (newSize: WindowSize) => {
    dispatch({ type: ActionType.UPDATE_WINDOW_SIZE, payload: { newSize } })
  }

  const getVideoData = async () => {
    const res = await fetch(mediaAPI.videos)
    const data = await res.json()
    dispatch({ type: ActionType.GET_VIDEO_DATA, payload: { videoData: data.data } })
  }

  const getAudioData = async () => {
    // Spotify
    const spotifyRes = await fetch(mediaAPI.spotify)
    const spotifyData = await spotifyRes.json()
    dispatch({ type: ActionType.GET_SPOTIFY_DATA, payload: { spotifyData: spotifyData.data } })
    // Apple Music
    const appleMusicRes = await fetch(mediaAPI.appleMusic)
    const appleMusicData = await appleMusicRes.json()
    dispatch({
      type: ActionType.GET_APPLE_MUSIC_DATA,
      payload: { appleMusicData: appleMusicData.data }
    })
    // Amazon Music
    const amazonMusicRes = await fetch(mediaAPI.amazonMusic)
    const amazonMusicData = await amazonMusicRes.json()
    dispatch({
      type: ActionType.GET_AMAZON_MUSIC_DATA,
      payload: { amazonMusicData: amazonMusicData.data }
    })
    // Soundcloud Music
    const soundcloudRes = await fetch(mediaAPI.soundcloud)
    const soundcloudData = await soundcloudRes.json()
    dispatch({
      type: ActionType.GET_SOUNDCLOUD_DATA,
      payload: { soundcloudData: soundcloudData.data }
    })
  }

  useEffect(() => {
    getVideoData()
    getAudioData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        // toggleDarkMode,
        changeWindowSize
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextInterface
}

export { AppContextProvider, useAppContext }
