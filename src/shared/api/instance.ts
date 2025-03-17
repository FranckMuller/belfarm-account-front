import axios, { AxiosError } from 'axios'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error: AxiosError) => {
    if (error.status === 404) {
      return Promise.reject('Произошла ошибка. Попробуйте повторить попытку позже')
    }
    if (error) {
      return Promise.reject(error.response?.data)
    }
  }
)
