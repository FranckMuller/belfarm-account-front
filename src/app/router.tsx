import { createBrowserRouter } from 'react-router-dom'

import { LoginForm } from '@/features/login/idex'
import { RegisterForm } from '@/features/register'
import { EditProfilePage } from '@/pages/edit-profile-page'
import { ProfilePage } from '@/pages/profile-page'
import { AuthLayout } from '@/shared/ui/layouts/auth/auth-layout'

import { ProductsPage } from '../pages/products-page'

import { MainLayout } from './ui/main-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/profile/edit',
        element: <EditProfilePage />,
      },
      {
        path: '/products/add',
        element: <ProductsPage />,
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: 'register',
        element: <RegisterForm />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
    ],
  },
])
