import type { FC } from 'react'
import { BiAnalyse } from 'react-icons/bi'
import { IoCartOutline } from 'react-icons/io5'
import { LiaCartPlusSolid } from 'react-icons/lia'
import { LuUser2 } from 'react-icons/lu'
import clsx from 'clsx'

import { SidebarLink } from './ui/sidebar-link'

import styles from './sidebar.module.scss'

type Props = {
  className?: string
}

export const Sidebar: FC<Props> = ({ className }) => {
  return (
    <nav className={styles['sidebar']}>
      <div className={styles['brand']}>Belfarm.by</div>

      <ul className={styles['menu']}>
        <li>
          <SidebarLink icon={<BiAnalyse />} href="dashboard">
            Дашборд
          </SidebarLink>
        </li>

        <li>
          <SidebarLink icon={<LuUser2 />} href="/profile">
            Мой профиль
          </SidebarLink>
        </li>
        <li>
          <SidebarLink icon={<IoCartOutline />} href="products">
            Моя продукция
          </SidebarLink>
        </li>
        <li>
          <SidebarLink icon={<LiaCartPlusSolid />} href="orders">
            Заказы
          </SidebarLink>
        </li>
      </ul>
    </nav>
  )
}
