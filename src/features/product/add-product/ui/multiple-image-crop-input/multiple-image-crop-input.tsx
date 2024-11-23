import type { Control, FieldValues, Path, UseFormSetError } from "react-hook-form"
import { Controller } from "react-hook-form"
import clsx from "clsx"

import { UiButton } from "@/shared/ui/ui-button"
import { UiDropzone } from "@/shared/ui/ui-dropzone"
import { UiModal } from "@/shared/ui/ui-modal"

import { ImageCropper } from "../image-crop-input/image-cropper"

import { CroppedImagesPreview } from "./components/cropped-images-preiew"
import { useMultipleImageCropInput } from "./hooks/use-multiple-image-crop-input"

type Props<T extends FieldValues> = {
  name: Path<T>
  control: Control<T>
  maxCount?: number
  isError?: boolean
  onError: UseFormSetError<T>
}

export const MultipleImageCropInput = <T extends FieldValues>({
  name,
  control,
  maxCount,
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
  } = useMultipleImageCropInput<T>(name, onError, maxCount)

  const handleSaveButtonClick = (onChange: (files: File[]) => void) => {
    console.log(croppedImages)
    if (croppedImages && croppedImages[0]?.image) {
      const file = new File([croppedImages[0]?.image], "photo")
      console.log(file)

      onChange([file])
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <>
            <UiDropzone isError={isError} onDrop={handleDrop} />
            {isLoading && <div>loading....</div>}
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
