import { IActionCreator, IAppState } from "../types"
import { SET_LOADING, SET_NOTIFICATION } from "./app.action"

const initialState: IAppState = {
  isLoading: false,
  isNotification: false,
  notification_type: 'info',
  notification_content: {
    message: '',
    description: ''
  }
}

export const appReducer = (state = initialState, { type, payload }: IActionCreator) => {
  switch(type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: payload
      }
    }
    case SET_NOTIFICATION: {
      return {
        ...state,
        notification_type: payload.type,
        isNotification: payload.isNotification,
        notification_content: {
          message: payload.message,
          description: payload.description
        }
      }
    }
    default:
      return state
  }
}