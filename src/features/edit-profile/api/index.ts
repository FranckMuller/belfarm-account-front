import { queryOptions } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api/instance'

type ProfileDto = {
  id: string
  name: string
  email: string
}

type updateProfileDto = {
  name: string
  email: string
}

export const profileApi = {
  getProfileQueryOptions: (id: string) => {
    return queryOptions({
      queryKey: ['profile'],
      queryFn: (meta) => axiosInstance.get<ProfileDto>(`/profile?id=${id}`),
    })
  },

  updateProfile: (data: updateProfileDto, id: string) => {
    return axiosInstance.post(`/profile?id=${id}`, data)
  },
}
