import { useMemo } from 'react'
import type { PixelCrop } from 'react-image-crop'

import { UiButton } from '@/shared/ui/ui-button'
import { UiFormField } from '@/shared/ui/ui-form-field'
import { UiSelect } from '@/shared/ui/ui-form-field/ui-select'
import { getImageUrl } from '@/shared/utils/images'

import { type AddProductFormFields, useAddProductForm } from '../../hooks/use-add-product-form'
import { ImageCropInput } from '../image-crop-input'
import { MultipleImageCropInput } from '../multiple-image-crop-input'

import { AddProductFormLayout } from './add-product-form-layout'
import { categories, statuses, subCategories, units } from './constants'

export const AddProductForm = () => {
  const { register, handleSubmit, control, setError, getValues, errors } = useAddProductForm()

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  const imageCrop: PixelCrop = useMemo(() => ({ unit: 'px', x: 0, y: 0, width: 350, height: 350 }), [])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col gap-5 flex px-2">
      <AddProductFormLayout
        infoProductFields={
          <>
            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Наименование продукта
              </UiFormField.Label>
              <UiFormField.Input isError={!!errors?.name} {...register('name')} />
              <UiFormField.Error>{errors?.name?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Выберите категорию
              </UiFormField.Label>
              <UiSelect<AddProductFormFields>
                control={control}
                name="category"
                options={categories}
                isError={!!errors?.category}
              />
              <UiFormField.Error>{errors?.category?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Выберите подкатегорию
              </UiFormField.Label>

              <UiSelect<AddProductFormFields>
                control={control}
                name="subCategory"
                options={subCategories}
                isError={!!errors?.subCategory}
              />
              <UiFormField.Error>{errors?.subCategory?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Артикул
              </UiFormField.Label>
              <UiFormField.Input {...register('article')} />
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Статус
              </UiFormField.Label>
              <UiSelect<AddProductFormFields>
                control={control}
                name="status"
                options={statuses}
                isError={!!errors?.status}
                defaultValue={statuses[0].value}
              />
              <UiFormField.Error>{errors?.status?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Единица измерения
              </UiFormField.Label>
              <UiSelect<AddProductFormFields>
                control={control}
                name="unit"
                options={units}
                isError={!!errors?.unit}
                defaultValue={units[0].value}
              />
              <UiFormField.Error>{errors?.unit?.message}</UiFormField.Error>
            </UiFormField>
          </>
        }
        descriptionProductFields={
          <>
            <UiFormField className="flex flex-col flex-1">
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Краткое описание
              </UiFormField.Label>
              <UiFormField.Textarea
                className="min-h-28 flex-1"
                isError={!!errors?.description}
                {...register('description')}
              />
              <UiFormField.Error>{errors?.description?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField className="flex flex-col flex-1">
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Полное описание описание
              </UiFormField.Label>
              <UiFormField.Textarea className="min-h-28 flex-1" {...register('fullDescription')} />
            </UiFormField>
          </>
        }
        priceProductFields={
          <>
            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Цена, руб.
              </UiFormField.Label>
              <UiFormField.Input {...register('price')} />
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Скидка, %
              </UiFormField.Label>
              <UiFormField.Input {...register('discount')} />
            </UiFormField>
            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Цена со скидкой, руб.
              </UiFormField.Label>
              <UiFormField.Input {...register('discountPrice')} />
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Количество л, за которое указана цена
              </UiFormField.Label>
              <UiFormField.Input {...register('priceUnitCount')} />
              <UiFormField.Error>{errors?.priceUnitCount?.message}</UiFormField.Error>
            </UiFormField>
          </>
        }
        photoProductFields={
          <>
            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Главное фото продукта
              </UiFormField.Label>
              <ImageCropInput<AddProductFormFields>
                control={control}
                name="photo"
                aspect={1 / 1}
                isError={!!errors?.photo}
                initCrop={imageCrop}
              />
              <UiFormField.Error>{errors?.photo?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Дополнительные фото
              </UiFormField.Label>
              <MultipleImageCropInput<AddProductFormFields>
                name="photos"
                control={control}
                maxCount={4}
                onError={setError}
                isError={!!errors?.photos}
                files={getValues('photos')}
              />
              <UiFormField.Error>{errors?.photos?.message}</UiFormField.Error>
            </UiFormField>

            <UiFormField>
              <UiFormField.Label tooltip="Придумайте оригинальное название, подчеркивающее качество и уникальность вашего продукта. Оно должно привлекать внимание покупателей">
                Сертификат
              </UiFormField.Label>
              <ImageCropInput
                initCrop={imageCrop}
                control={control}
                name="photo"
                aspect={1 / 1}
                isError={!!errors?.photo}
              />
              <UiFormField.Error>{errors?.photo?.message}</UiFormField.Error>
            </UiFormField>
          </>
        }
        button={<UiButton variant="primary">Сохранить</UiButton>}
      />
    </form>
  )
}
