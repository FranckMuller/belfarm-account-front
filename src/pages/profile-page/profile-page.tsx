import { NavLink } from 'react-router-dom'

import { Profile } from '@/entities/profile'

export const ProfilePage = () => {
  return (
    <>
      <Profile />
      <NavLink to="edit">Редактировать</NavLink>
    </>
  )
}
