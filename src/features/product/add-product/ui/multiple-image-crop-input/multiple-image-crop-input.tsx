import type { Control, FieldValues, Path, UseFormSetError } from "react-hook-form"
import { Controller, useWatch } from "react-hook-form"
import clsx from "clsx"

import { UiButton } from "@/shared/ui/ui-button"
import { UiDropzone } from "@/shared/ui/ui-dropzone"
import { UiModal } from "@/shared/ui/ui-modal"
import { getImageUrl } from "@/shared/utils/images"

import { ImageCropper } from "../image-crop-input/image-cropper"

import { CroppedImagesPreview } from "./components/cropped-images-preiew"
import { useMultipleImageCropInput } from "./hooks/use-multiple-image-crop-input"

type Props<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  maxCount?: number
  isError?: boolean
  files?: File[]
  onError: UseFormSetError<T>
}

const DROPZONE_TITLE = "Перетяните ваши фото сюда"

export const MultipleImageCropInput = <T extends FieldValues>({
  name,
  control,
  maxCount,
  files,
  isError,
  onError,
}: Props<T>) => {
  const {
    images,
    croppedImages,
    isLoading,
    isCropLoading,
    currentCropImageIndex,
    handleDrop,
    handleModalClose,
    handleCropComplete,
    handlePreviewImageClick,
    handlePhotoDelete,
  } = useMultipleImageCropInput<T>(name, onError, maxCount)

  useWatch({ control, name })

  const handleSaveButtonClick = (onChange: (files: File[]) => void) => {
    if (croppedImages && croppedImages.length > 0) {
      const files = croppedImages.map((image) => {
        if (image !== null) {
          return new File([image.image], image.name)
        }
      })

      const filesToSubmit = files.filter((file) => file !== undefined)

      if (filesToSubmit.length) {
        onChange(filesToSubmit)
      }

      handleModalClose()
    }
  }

  const viewedImages = files ? files.map((file) => getImageUrl(file)) : null

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <>
            <UiDropzone
              title={DROPZONE_TITLE}
              files={files}
              isError={isError}
              isLoading={isLoading}
              onDrop={handleDrop}
              className="flex-1"
            >
              {viewedImages && <UiDropzone.ImagesPreview imagesUrls={viewedImages} />}
            </UiDropzone>

            <UiModal
              size="content"
              className="md:max-h-[calc(100vh-5rem)] relative"
              isOpen={!!(croppedImages && images)}
              onClose={handleModalClose}
            >
              {images?.length && (
                <div className={clsx("mx-auto max-h-[calc(100vh-9.25rem-196px)]")}>
                  <ImageCropper image={images[currentCropImageIndex]} onCropComplete={handleCropComplete} />
                </div>
              )}

              {croppedImages && (
                <CroppedImagesPreview
                  isCropLoading={isCropLoading}
                  activeImageIndex={currentCropImageIndex}
                  images={croppedImages}
                  onImageClick={handlePreviewImageClick}
                  onDelete={handlePhotoDelete}
                />
              )}

              <UiButton onClick={() => handleSaveButtonClick(onChange)} className="mr-auto mt-4">
                Сохранить
              </UiButton>
            </UiModal>
          </>
        )
      }}
    />
  )
}
