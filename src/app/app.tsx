import { RouterProvider } from "react-router-dom"

import { Provider } from "./provider"
import { router } from "./router"

export const App = () => {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
}
