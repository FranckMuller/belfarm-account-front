import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { z } from 'zod'

import { registerUser, RegisterUserDto } from '../api'

const registerSchema = z
  .object({
    name: z.string().min(1, { message: 'Заполните поле' }),
    email: z.string().min(1, { message: 'Заполните поле' }).email({ message: 'неверный формат email' }),
    password: z
      .string()
      .min(1, { message: 'Заполните поле' })
      .refine((value) => value.length >= 3, {
        message: 'Минимум 10 символов для пароля',
      }),
    passwordRepeat: z.string().min(1, { message: 'Заполните поле' }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: 'Пароли не совпадают',
    path: ['passwordRepeat'],
  })

export const useRegister = () => {
  const navigate = useNavigate()

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate('/profile')
    },
    onError: (err) => {
      console.log(err)
    },
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterUserDto>({ resolver: zodResolver(registerSchema) })

  const onSubmit = handleSubmit((data) => {
    registerMutation.mutateAsync(data)
  })

  return { register, onSubmit, errors, isPending: registerMutation.isPending }
}
