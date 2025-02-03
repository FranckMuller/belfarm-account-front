import { createBrowserRouter } from 'react-router-dom'

import { LoginForm, RegisterForm } from '@/features/auth'
import { AuthLayout } from '@/shared/ui/layouts/auth/auth-layout'

import { ProductsPage } from '../pages/products-page'

import { Layout } from './layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: 'products',
        element: <ProductsPage />,
      },
      // {
      //   path: "/products/add",
      //   element: <ProductsPage />,
      // },
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
