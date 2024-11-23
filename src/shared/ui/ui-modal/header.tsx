import type { FC, PropsWithChildren } from "react"
import clsx from "clsx"

type Props = { className?: string } & PropsWithChildren

export const Header: FC<Props> = ({ className, children }) => {
  return <div className={clsx(className, "pt-6 pb-4 px-5 text-xl")}>{children}</div>
}
