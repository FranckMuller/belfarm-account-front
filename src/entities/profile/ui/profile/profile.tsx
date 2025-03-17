import { useGetProfile } from '../../hooks'

import { ProfileAvatar } from './components/profile-avatar'
import { ProfileContacts } from './components'

import styles from './profile.module.scss'

const mapProfileToContacts = (profile: any) => {
  return {
    email: profile.email,
    phone: profile.phone,
    telegram: profile.telegram,
    viber: profile.viber,
    whatsapp: profile.whatsapp,
    instagram: profile.instagram,
  }
}

export const Profile = () => {
  const { data: profile } = useGetProfile()

  if (!profile) return null

  return (
    <div className={styles['profile-card']}>
      <div className={styles['card-header']}>
        <div className={styles['title']}>Профиль</div>
      </div>
      <div>
        <div className={styles['card-body']}>
          <div className={styles['card-info']}>
            <ProfileAvatar className={styles['profile-avatar']} />
            <h5 className={styles['profile-name']}>{profile.name}</h5>
            <div className={styles['profile-status']}>фермер</div>
          </div>

          <div>
            <h5 className={styles['card-title']}>Контакты</h5>
            <ProfileContacts contacts={mapProfileToContacts(profile)} />
          </div>

          <div>
            <h5 className={styles['card-title']}>Адрес доставки</h5>
            <div>Минская область г. Минск Волоха 25</div>
          </div>

          <div>
            <h5 className={styles['card-title']}>Адрес хозяйства</h5>
            <div>Минская область г. Минск Волоха 25</div>
          </div>
        </div>
      </div>
    </div>
  )
}
