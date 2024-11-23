import type { FC } from "react"
import { BiAnalyse } from "react-icons/bi"
import { IoCartOutline } from "react-icons/io5"
import { LiaCartPlusSolid } from "react-icons/lia"
import { LuUser2 } from "react-icons/lu"
import clsx from "clsx"

import { SidebarLink } from "./ui/sidebar-link"

type Props = {
  className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "h-full bg-white pt-4 shadow-lg")}>
      <div className="mt-8 text-gray-900">
        <SidebarLink href="dashboard">
          <BiAnalyse className="h-6 w-6" /> Дашборд
        </SidebarLink>

        <SidebarLink href="/">
          <LuUser2 className="h-6 w-6" /> Мой профиль
        </SidebarLink>

        <SidebarLink href="products">
          <IoCartOutline className="h-6 w-6" /> Моя продукция
        </SidebarLink>

        <SidebarLink href="orders">
          <LiaCartPlusSolid className="h-6 w-6" /> Заказы
        </SidebarLink>
      </div>
    </div>
  )
}
