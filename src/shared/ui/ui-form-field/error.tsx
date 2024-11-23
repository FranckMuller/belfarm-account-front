import type { FC, PropsWithChildren } from "react"
import clsx from "clsx"

type Props = {
  className?: string
} & PropsWithChildren

export const Error: FC<Props> = ({ className, children }) => {
  if (!children) return null

  return <div className={clsx(className, "absolute top-full translate-y-px text-[11px] text-red-300")}>{children}</div>
}
