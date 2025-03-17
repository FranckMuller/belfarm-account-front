import { useQuery } from '@tanstack/react-query'

import { getProfileQueryOptions } from '../api'

export const useGetProfile = () => {
  return useQuery({
    ...getProfileQueryOptions(),
  })
}
