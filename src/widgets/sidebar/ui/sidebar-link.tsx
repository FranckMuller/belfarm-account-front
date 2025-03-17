import type { FC, PropsWithChildren, ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import styles from './sidebar-link.module.scss'

type Props = { href: string; icon: ReactElement } & PropsWithChildren

export const SidebarLink: FC<Props> = ({ href, icon, children }) => {
  const classNames = ({ isActive }: { isPending: boolean; isActive: boolean }) => {
    return clsx(styles['sidebar-link'], isActive && styles['active'])
  }

  return (
    <NavLink className={classNames} to={href}>
      <span className={styles['icon']}>{icon}</span>
      {children}
    </NavLink>
  )
}
