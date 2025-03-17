import { type FC, forwardRef, type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from './input.module.scss'

type Props = {
  className?: string
  isError?: boolean
  size?: 'md' | 'lg'
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ className, isError, size = 'md', ...input }, ref) => {
    const classNames = clsx(
      className,
      {
        md: 'py-1.5 px-3 text-xs rounded-[3px]',
        lg: 'py-2 px-4 text-md rounded-[6px]',
      }[size],
      isError && styles['error'],
      styles['input']
    )

    return <input ref={ref} className={classNames} {...input} />
  }
)
