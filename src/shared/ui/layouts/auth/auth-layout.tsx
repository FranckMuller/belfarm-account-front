import { Outlet } from 'react-router-dom'

import bg from './auth-bg.png'

export const AuthLayout = () => {
  return (
    <div className="font-shantel flex h-screen">
      <div className="flex-1 h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
      <div className="flex flex-1 justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}
