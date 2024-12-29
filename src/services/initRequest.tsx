import axios, { AxiosRequestConfig } from "axios"
import { setLoading, setNotification } from "../redux/app.action"

interface IConfig extends AxiosRequestConfig {
  showSpinner?: boolean
}

const config: IConfig = {
  baseURL: 'https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app',
  timeout: 10000,
  showSpinner: false
}

export const axiosInstance = axios.create(config)

export function initRequest(store: any) {
  let requestCount = 0;

  function descreaseRequest() {
    requestCount -= 1;
    if(requestCount === 0) {
      store.dispatch(setLoading(false))
    }
  }

  axiosInstance.interceptors.request.use(
    (config: any) => {
      console.log('axiosInstance request success: ', config)
      store.dispatch(setNotification({
        isNotification: false,
      }))

      // show loading
      if(config.showSpinner) {
        requestCount += 1;
        store.dispatch(setLoading(true))
      }

      return config
    },
    (error: any) => {
      console.log('axiosInstance request error ', error)

      // hide loading
      if(error.config.showSpinner) {
        descreaseRequest();
      }
      return Promise.reject(error);
    }
  )

  axiosInstance.interceptors.response.use(
    (res: any) => {
      console.log('axiosInstance response success: ', res)
      if(res.config.showSpinner) {
        // hide loading
        descreaseRequest();
      }
    
      return res
    },
    async (error: any) => {
      console.log('axiosInstance response error ', error)

      // hide loading
      if(error.config.showSpinner) {
        // hide loading
        store.dispatch(setLoading(false))
      }

      // handle error timeout
      if(error.code === "ECONNABORTED") {
        // something ...
      }

      // token expired
      if(error.response.status === 401) {
        try {
          const result = await axiosInstance.post(`https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user/refresh-token`, {
            data: {
              refresh_token: window.localStorage.getItem('access_token')
            }
          })
          window.localStorage.setItem('access_token', result.data.access_token);
          axiosInstance.defaults.headers.common['x-auth-token'] =  result.data.access_token;
          return axiosInstance(error.config); // auto trigger call api
        } catch (error: any) {
          if(error.response && error.response.data) {
            return Promise.reject(error.response.data);
          }
          return Promise.reject(error);
        }
      }

      // handle error common
      switch(error.response.status) {
        case 400: {
          // ...
          break;
        }
        case 404: {
          store.dispatch(setNotification({
            type: 'error',
            isNotification: true,
            message: `Error`,
            description: 'Failure'
          }))
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

/* authorize FE & BE
FE -> feature, page, component ...
all: all
page: home, about, user
feature: get list user, delete user, update user, get content ...
component: ButtonDelete, ButtonUpdate

admin
  - all

member
  - page: home, about
 - feature: get content
 - component: N/A

BE -> call api: CRUD (create, read, update, delete)
pass header x-auth-token: access_token
get list user: GET /api/users
get one user: GET /api/user/1
delete user: DELETE /api/user/1
update user: POST /api/user/1
get content: GET /api/content

member
 - get content: GET /api/content
 - get one user: GET /api/user/1 -> show error 403
*/