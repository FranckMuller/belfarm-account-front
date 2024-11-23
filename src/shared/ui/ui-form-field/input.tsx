import { type FC, forwardRef, type InputHTMLAttributes } from "react"
import clsx from "clsx"

type Props = {
  className?: string
  isError?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(({ className, isError, ...input }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(
        className,
        "py-1.5 px-3 border border-gray-400 w-full text-xs rounded-[3px] outline-none min-h-[34px]",
        "focus:border-gray-500",
        isError && "border-orange-500 focus:border-orange-500"
      )}
      {...input}
    />
  )
})
