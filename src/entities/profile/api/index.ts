import { queryOptions } from '@tanstack/react-query'

import { axiosInstance } from '@/shared/api/instance'

type Profile = {
  name: string
}

export const getProfileQueryOptions = () => {
  return queryOptions<Profile>({
    queryKey: ['profile'],
    queryFn: () => axiosInstance.get('/users/profile'),
  })
}
