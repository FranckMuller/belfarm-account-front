import { Outlet } from "react-router-dom"

import { Header } from "../widgets/header"
import { PageHeading } from "../widgets/page-heading"
import { Sidebar } from "../widgets/sidebar"

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-100 md:pl-52 xl:pl-64 min-h-[100vh] flex flex-col">
        <Sidebar className="flex-1 min-h-screen fixed z-[100] w-52 xl:w-64 top-[70px] -left-64 md:left-0 rounded-tr-[30px]" />
        <div className="flex flex-col flex-1 pt-[145px] px-5 pb-5">
          <PageHeading />
          <Outlet />
        </div>
      </main>
    </>
  )
}
