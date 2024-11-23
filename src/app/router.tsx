import { createBrowserRouter } from "react-router-dom"

import { ProductsPage } from "../pages/products-page"

import { Layout } from "./layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
    ],
  },
])
