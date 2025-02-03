import type { FC } from "react"
import clsx from "clsx"

type Props = {
  className?: string
}

export const UiSpinner: FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "w-full h-full flex items-center justify-center bg-black/30")}>
      <div className="loader w-6 h-6 border-2 border-solid border-white border-b-transparent rounded-full inline-block box-border animate-spin"></div>
    </div>
  )
}
