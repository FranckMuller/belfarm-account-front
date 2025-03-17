import { FC } from 'react'

type Props = {
  contacts: {
    email: string
    phone: string
    telegram: string
    viber: string
    whatsapp: string
    instagram: string
  }
}

export const ProfileContacts: FC<Props> = ({ contacts }) => {
  return (
    <ul>
      <li>
        Телефон <span>{contacts.phone}</span>
      </li>
      <li>
        E-mail <span>{contacts.email}</span>
      </li>
      <li>
        Telegram <span>{contacts.telegram}</span>
      </li>
      <li>
        Viber <span>{contacts.viber}</span>
      </li>
      <li>
        WhatsApp <span>{contacts.whatsapp}</span>
      </li>
      <li>
        Instagram <span>{contacts.instagram}</span>
      </li>
    </ul>
  )
}
