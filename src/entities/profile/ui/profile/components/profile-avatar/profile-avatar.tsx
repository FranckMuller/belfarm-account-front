import { FC } from 'react'
import clsx from 'clsx'

import styles from './profile-avatar.module.scss'

type Props = {
  avatarSrc?: string
  className?: string
}

export const ProfileAvatar: FC<Props> = ({ avatarSrc, className }) => {
  return (
    <div className={clsx(styles['profile-avatar'], className)}>
      {avatarSrc ? (
        <img src="https://fermerfood.by/storage/Farmer_Avatar_img/B84rtmNzzF8MC0oSNaJYC3U0bflqkAB8.jpg" alt="" />
      ) : (
        <div>DS</div>
      )}
    </div>
  )
}
