import { useForm } from 'react-hook-form'

import { UiFormField } from '@/shared/ui/ui-form-field'

import styles from './edit-profile-form.module.scss'

export const EditProfileForm = () => {
  const { control, getValues, setError } = useForm()
  return (
    <div className={styles['form-wrapper']}>
      <form action="">
        <div className={styles['form-section']}>
          <h3 className={styles['form-section-header']}>Личная информация</h3>
          <div className={styles['form-section-body']}>
            <UiFormField>
              <UiFormField.Label>Название хозяйства</UiFormField.Label>
              <UiFormField.Input></UiFormField.Input>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label>ФИО контактного лица</UiFormField.Label>
              <UiFormField.Input></UiFormField.Input>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label>E-mail</UiFormField.Label>
              <UiFormField.Input></UiFormField.Input>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label>Фото профиля</UiFormField.Label>
              <UiFormField.CropImageInput
                name="photos"
                control={control}
                maxCount={1}
                onError={setError}
                isError={false}
                files={getValues('avatar')}
              />
            </UiFormField>
          </div>
        </div>
      </form>
    </div>
  )
}
