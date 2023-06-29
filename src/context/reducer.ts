import { ActionType } from './actions'
import { StateInterface, MediaData, WindowSize } from './appContext'

type Action =
  // | { type: ActionType.TOGGLE_DARK_MODE }
  | {
      type: ActionType.UPDATE_WINDOW_SIZE
      payload: { newSize: WindowSize }
    }
  | {
      type: ActionType.GET_VIDEO_DATA
      payload: { videoData: MediaData[] }
    }
  | {
      type: ActionType.GET_SPOTIFY_DATA
      payload: { spotifyData: MediaData[] }
    }
  | {
      type: ActionType.GET_APPLE_MUSIC_DATA
      payload: { appleMusicData: MediaData[] }
    }
  | {
      type: ActionType.GET_AMAZON_MUSIC_DATA
      payload: { amazonMusicData: MediaData[] }
    }
  | {
      type: ActionType.GET_SOUNDCLOUD_DATA
      payload: { soundcloudData: MediaData[] }
    }

const reducer = (state: StateInterface, action: Action): StateInterface => {
  switch (action.type) {
    // case ActionType.TOGGLE_DARK_MODE:
    //   return {
    //     ...state,
    //     darkMode: !state.darkMode
    //   }
    case ActionType.UPDATE_WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.payload.newSize
      }
    case ActionType.GET_VIDEO_DATA:
      return {
        ...state,
        videoData: action.payload.videoData
      }
    case ActionType.GET_SPOTIFY_DATA:
      return {
        ...state,
        spotifyData: action.payload.spotifyData
      }
    case ActionType.GET_APPLE_MUSIC_DATA:
      return {
        ...state,
        appleMusicData: action.payload.appleMusicData
      }
    case ActionType.GET_AMAZON_MUSIC_DATA:
      return {
        ...state,
        amazonMusicData: action.payload.amazonMusicData
      }
    case ActionType.GET_SOUNDCLOUD_DATA:
      return {
        ...state,
        soundcloudData: action.payload.soundcloudData
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default reducer
