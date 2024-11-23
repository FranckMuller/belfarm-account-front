import { type FC, type PropsWithChildren, useState } from "react"
import clsx from "clsx"

type Props = {
  className?: string
  text: string
} & PropsWithChildren

export const UiTooltip: FC<Props> = ({ className, text, children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div
      className={clsx(className, "relative z-10 font-light")}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="cursor-pointer">{children}</div>
      {visible && (
        <div
          className={clsx(
            "absolute w-max max-w-60 text-xs bg-white px-3 py-2 top-1/2 left-full -translate-y-1/2 translate-x-2 shadow-md text-gray-700 rounded-[3px]"
            // "after:content-'' after:bg-transparent after:text-transparent after:absolute after:top-1/2 after:-left-[16px] after:translate-x-1/2 after:border-[5px] after:border-r-gray-100"
          )}
        >
          {text}
        </div>
      )}
    </div>
  )
}
