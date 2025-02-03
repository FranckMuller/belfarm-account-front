import type { FC, PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type Props = {} & PropsWithChildren

const queryClient = new QueryClient()

export const Provider: FC<Props> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
