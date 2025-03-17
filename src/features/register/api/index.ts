import { axiosInstance } from '@/shared/api/instance'

export type RegisterUserDto = {
  name: string
  email: string
  password: string
  passwordRepeat: string
}

export const registerUser = (data: RegisterUserDto) => {
  return axiosInstance.post('/auth/register', data)
}
