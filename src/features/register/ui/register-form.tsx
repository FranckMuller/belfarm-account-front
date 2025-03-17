import { UiButton } from '@/shared/ui/ui-button'
import { UiFormField } from '@/shared/ui/ui-form-field'

import { useRegister } from '../hooks/use-register'

export const RegisterForm = () => {
  const { register, onSubmit, errors, isPending } = useRegister()

  return (
    <div className="max-w-[420px] mx-auto">
      <h3 className="font-shantel text-4xl mb-12 text-center text-green-800">Регистрация</h3>

      <form onSubmit={onSubmit}>
        <UiFormField className="mb-6">
          <UiFormField.Label>Введите ваш email</UiFormField.Label>
          <UiFormField.Input placeholder="fermer@gmail.com" size="lg" {...register('email')} />
          <UiFormField.Error>{errors.email?.message}</UiFormField.Error>
        </UiFormField>

        <UiFormField className="mb-6">
          <UiFormField.Label>Введите ваше имя</UiFormField.Label>
          <UiFormField.Input placeholder="Иванов Иван Иванович" size="lg" {...register('name')} />
          <UiFormField.Error>{errors.name?.message}</UiFormField.Error>
        </UiFormField>

        <UiFormField className="mb-6">
          <UiFormField.Label>Придумайте пароль</UiFormField.Label>
          <UiFormField.Input size="lg" {...register('password')} />
          <UiFormField.Error>{errors.password?.message}</UiFormField.Error>
        </UiFormField>

        <UiFormField className="mb-8">
          <UiFormField.Label>Повторите ваш пароль</UiFormField.Label>
          <UiFormField.Input size="lg" {...register('passwordRepeat')} />
          <UiFormField.Error>{errors.passwordRepeat?.message}</UiFormField.Error>
        </UiFormField>

        <UiButton variant="secondary" size="lg" disabled={isPending} isLoading={isPending}>
          Зарегистрироваться
        </UiButton>
      </form>
    </div>
  )
}
