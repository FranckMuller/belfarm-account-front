import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const MAX_SIZE = 300 * 1024

const validationSchema = z.object({
  name: z.string().min(1, 'Заполните поле'),
  category: z.string({ message: 'Выберите категорию' }),
  subCategory: z.string({ message: 'Выберите подкатегорию' }),
  article: z.string(),
  status: z.string({ message: 'Выбирете статус' }),
  unit: z.string({ message: 'Выбирите единицу измерения' }),

  photo: z.custom<File>().transform((file, ctx) => {
    if (!SUPPORTED_FORMATS.includes(file?.type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Загрузите фото в формате JPG, PNG или WEBP',
      })
    } else if (file?.size > MAX_SIZE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Файл должен весить не больше 300 KB',
      })
    }

    return file
  }),
  description: z.string().min(1, 'Напишите описание'),
  photos: z.custom<File[]>().transform((files, ctx) => {
    console.log(files)
    if (!files) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Загрузите фото',
      })
    }
    // if (!SUPPORTED_FORMATS.includes(file?.type)) {
    //   ctx.addIssue({
    //     code: z.ZodIssueCode.custom,
    //     message: "Загрузите фото в формате JPG, PNG или WEBP",
    //   })
    // } else if (file?.size > MAX_SIZE) {
    //   ctx.addIssue({
    //     code: z.ZodIssueCode.custom,
    //     message: "Файл должен весить не больше 300 KB",
    //   })
    // }

    return files
  }),
  fullDescription: z.string(),
  price: z.string(),
  discount: z.string(),
  discountPrice: z.string(),
  priceUnitCount: z.string(),
})

export type AddProductFormFields = z.infer<typeof validationSchema>

export const useAddProductForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, ...state },
    setError,
    getValues,
  } = useForm<AddProductFormFields>({
    resolver: zodResolver(validationSchema),
  })

  useWatch({ control, name: 'photos' })

  return { register, handleSubmit, setError, getValues, control, errors }
}
