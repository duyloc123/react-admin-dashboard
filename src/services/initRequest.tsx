import axios, { AxiosRequestConfig } from "axios"

interface IConfig extends AxiosRequestConfig {
  showSpinner?: boolean
}

const config: IConfig = {
  baseURL: 'https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app',
  timeout: 10000,
  showSpinner: false
}

export const axiosInstance = axios.create(config)

export function initRequest() {
  axiosInstance.interceptors.request.use(
    (config: any) => {
      console.log('axiosInstance request success: ', config)

      // show loading
      if(config.showSpinner) {
        // shgow loading;
      }
      return config
    },
    (error: any) => {
      console.log('axiosInstance request error ', error)
      return Promise.reject(error);
    }
  )

  axiosInstance.interceptors.response.use(
    (res: any) => {
      console.log('axiosInstance response success: ', res)
      if(res.config.showSpinner) {
        // hide loading
      }
    
      return res
    },
    (error: any) => {
      console.log('axiosInstance response error ', error)

      // hide loading
      if(error.config.showSpinner) {
        // hide loading
      }

      // handle error timeout
      if(error.code === "ECONNABORTED") {
        // something ...
      }

      // handle error common
      switch(error.response.status) {
        case 400: {
          // ...
          break;
        }
        case 500: {
          ///
          break
        }
        case 502: {
          ///
          break
        }
        default:
          break;
      }

      return Promise.reject(error.response);
    }
  )
}