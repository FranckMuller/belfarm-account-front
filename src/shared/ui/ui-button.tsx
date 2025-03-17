import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

type Props = {
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
} & PropsWithChildren &
  ButtonProps

export const UiButton: FC<Props> = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  onClick,
  children,
  ...button
}) => {
  const classNames = clsx(
    className,
    {
      primary: 'text-white bg-blue-500 hover:bg-blue-600',
      secondary: 'text-white bg-orange-400 hover:bg-orange-600',
      outline: 'color-black border border-gray-400 hover:border-gray-500',
    }[variant],
    {
      md: 'px-4 py-2 text-sm rounded-s',
      lg: 'px-6 py-3 text-md rounded-lg',
      sm: 'px-3 py-1 text-xs rounded-s',
    }[size],
    'rounded transition'
  )

  return (
    <button className={classNames} onClick={onClick} {...button}>
      {!isLoading && children}
      {isLoading && 'loading'}
      {/* <div className="transitions"></div> */}
    </button>
  )
}
