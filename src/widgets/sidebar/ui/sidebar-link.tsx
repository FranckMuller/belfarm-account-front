import type { FC, PropsWithChildren } from "react"
import { NavLink } from "react-router-dom"
import clsx from "clsx"

type Props = { href: string } & PropsWithChildren

export const SidebarLink: FC<Props> = ({ href, children }) => {
  const classNames = ({ isActive }: { isPending: boolean; isActive: boolean }) =>
    clsx(
      isActive && "border-blue-600 bg-blue-600 hover:bg-blue-600 text-white",
      "flex gap-3 items-center py-3 px-3 xl:py-3 xl:px-6 border-l-[3px] border-transparent hover:border-blue-600 hover:bg-gray-100"
    )

  return (
    <NavLink className={classNames} to={href}>
      {children}
    </NavLink>
  )
}
