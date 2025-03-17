import { Outlet } from 'react-router-dom'

import { Header } from '@/widgets/header'
import { Sidebar } from '@/widgets/sidebar'

import styles from './main-layout.module.scss'

export const MainLayout = () => {
  return (
    <div className={styles['main-layout']}>
      <Sidebar />
      <div className={styles['app-container']}>
        <Header />
        <main className={styles['app-body']}>
          <Outlet />
        </main>
        <footer className={styles['footer']}>© Bootstrap Gallery 2024</footer>
      </div>
    </div>
  )
}
