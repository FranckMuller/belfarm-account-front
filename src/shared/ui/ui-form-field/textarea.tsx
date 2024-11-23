import type { FC, TextareaHTMLAttributes } from "react"
import { forwardRef } from "react"
import clsx from "clsx"

type Props = {
  className?: string
  isError?: boolean
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: FC<Props> = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, isError, ...textarea }, ref) => {
    return (
      <textarea
        className={clsx(
          className,
          "py-1.5 px-3 border border-gray-400 w-full text-xs rounded-[3px] outline-none resize-none",
          "focus:border-gray-500",
          isError && "border-red-200 focus:border-red-200"
        )}
        ref={ref}
        {...textarea}
      />
    )
  }
)
