import type { InputHTMLAttributes } from 'react'
import { type Control, Controller, FieldValues, Path } from 'react-hook-form'
import type { PixelCrop } from 'react-image-crop'

import { UiDropzone } from '@/shared/ui/ui-dropzone'

import { ImageCropModal } from './image-crop-modal'
import { useImageCropInput } from './use-image-crop-input'

import 'react-image-crop/src/ReactCrop.scss'

type Props<T extends FieldValues> = {
  className?: string
  aspect?: number
  control: Control<T>
  name: Path<T>
  isError?: boolean
  initCrop: PixelCrop
} & InputHTMLAttributes<HTMLInputElement>

const DROPZONE_TITLE = 'Перетяните фото сюда'

export const ImageCropInput = <T extends FieldValues>({
  control,
  name,
  aspect = 1 / 1,
  className,
  isError,
  initCrop,
}: Props<T>) => {
  const { croppedImage, previewImage, blobImageUrl, handleCropComplete, handleDropImage, handleSaveButtonClick } =
    useImageCropInput()

  const croppedImageUrl = croppedImage?.url

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <>
            <UiDropzone
              title={DROPZONE_TITLE}
              className={className}
              isError={isError}
              multiple={false}
              onDrop={handleDropImage}
            />

            {previewImage && (
              <div className="border border-gray-500 p-3 rounded-[3px]">
                <img src={previewImage} width={130} height={130} alt="preview" />
              </div>
            )}

            {blobImageUrl && (
              <ImageCropModal
                title="Обрежте ваше фото"
                imageUrl={blobImageUrl}
                initCrop={initCrop}
                aspect={aspect}
                previewImageUrl={croppedImageUrl}
                onCropComplete={handleCropComplete}
                onSaveButtonClick={() => handleSaveButtonClick(onChange)}
                isCropOnMount
              />
            )}
          </>
        )
      }}
    />
  )
}
