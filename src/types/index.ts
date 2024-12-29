export interface IActionCreator {
  type: string;
  payload: any;
}

export interface IAppState {
  isLoading: boolean,
  isNotification: boolean,
  notification_type:  'info' | 'error' | 'success',
  notification_content: {
    message: string,
    description: string
  }
}

export interface IRooteState {
  app: IAppState
}

export interface INotificationPayload {
  type?: string;
  isNotification: boolean,
  message?: string;
  description?: string;
}