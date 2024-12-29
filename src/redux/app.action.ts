import { INotificationPayload } from "../types";

export const SET_LOADING = 'APP/SET_LOADING';
export const SET_NOTIFICATION = 'APP/SET_NOTIFICATION';

export const setLoading = (isLoading: boolean) => {
  return {
    type: SET_LOADING,
    payload: isLoading
  }
}

export const setNotification = ({ type, message, description, isNotification }: INotificationPayload) => {
  return {
    type: SET_NOTIFICATION,
    payload: {
      type,
      message,
      description,
      isNotification
    }
  }
}

// setNotification('error', 'xxx', 'xxxx')