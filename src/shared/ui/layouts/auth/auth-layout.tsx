import { Outlet } from 'react-router-dom'

import bg from './auth-bg.png'

export const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="flex-1 px-20 pt-32">
        <Outlet />
      </div>
    </div>
  )
}
