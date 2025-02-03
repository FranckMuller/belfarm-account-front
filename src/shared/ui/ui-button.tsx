import type { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"
import clsx from "clsx"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

type Props = {
  className?: string
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & PropsWithChildren &
  ButtonProps

export const UiButton: FC<Props> = ({ className, variant = "primary", size = "md", onClick, children, ...button }) => {
  const classNames = clsx(
    className,
    {
      primary: "text-white bg-blue-500 hover:bg-blue-600",
      secondary: "color-black border border-gray-400 hover:border-gray-600",
    }[variant],
    {
      md: "px-4 py-2 text-sm rounded-s",
      lg: "px-4 py-2 text-sm rounded-s",
      sm: "px-3 py-1 text-xs rounded-s",
    }[size],
    "rounded transition"
  )

  return (
    <button className={classNames} onClick={onClick} {...button}>
      {children}
      {/* <div className="transitions"></div> */}
    </button>
  )
}
