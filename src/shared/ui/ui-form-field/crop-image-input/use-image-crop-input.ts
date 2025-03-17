import { useCallback, useState } from 'react'
import { FieldValues, Path, UseFormSetError } from 'react-hook-form'
import type { PixelCrop } from 'react-image-crop'

import { getCroppedImg, type TCroppedImage } from '@/shared/utils/canvas'
import { getImageUrlWithOriginalSizes, type TImageWithSizes } from '@/shared/utils/images'

type TImage = TImageWithSizes & {
  crop?: PixelCrop
}

export const useMultipleImageCropInput = <T extends FieldValues>(
  name: Path<T>,
  onError: UseFormSetError<T>,
  maxCount?: number
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isCropLoading, setIsCropLoading] = useState(false)
  const [currentCropImageIndex, setCurrentCropImageIndex] = useState(0)
  const [croppedImages, setCroppedImages] = useState<Array<TCroppedImage | null>>()
  const [images, setImages] = useState<TImage[]>()

  const handleDrop = async (files: File[]) => {
    if (maxCount && files.length > maxCount) {
      onError(name, { type: 'custom', message: `максимально количество фото ${maxCount}` })
      return
    }

    setIsLoading(true)
    const imagesUrlsWithSizes = await Promise.all(files.map((file) => getImageUrlWithOriginalSizes(file)))

    const croppedImages = await Promise.all(
      imagesUrlsWithSizes.map((image) => {
        return getCroppedImg(
          image.url,
          image.name,
          {
            unit: 'px',
            x: 0,
            y: 0,
            width: Math.min(image.width, image.height),
            height: Math.min(image.width, image.height),
          },
          {
            width: image.width,
            height: image.height,
          }
        )
      })
    )

    setImages(imagesUrlsWithSizes)
    setCroppedImages(croppedImages)
    setIsLoading(false)
  }

  const handleCropComplete = useCallback(
    async (crop: PixelCrop, sizes: { width: number; height: number }) => {
      if (!images) return

      setIsCropLoading(true)

      const newImages = images.map((image, index) =>
        currentCropImageIndex === index
          ? {
              ...image,
              crop,
            }
          : image
      )

      setImages((prev) => {
        return prev?.map((image, index) =>
          currentCropImageIndex === index
            ? {
                ...image,
                crop,
              }
            : image
        )
      })

      const croppedImage = await getCroppedImg(
        newImages[currentCropImageIndex].url,
        newImages[currentCropImageIndex].name,
        crop,
        sizes
      )

      setCroppedImages((prev) =>
        prev?.map((image, index) => {
          return index === currentCropImageIndex ? croppedImage : image
        })
      )
      setIsCropLoading(false)
    },

    [images, currentCropImageIndex]
  )

  const handlePreviewImageClick = (index: number) => {
    setCurrentCropImageIndex(index)
  }

  const handleModalClose = () => {
    setCroppedImages(undefined)
  }

  const handlePhotoDelete = (index: number) => {
    setImages((prev) => prev?.filter((_, idx) => idx !== index))
    setCroppedImages((prev) => prev?.filter((_, idx) => idx !== index))
    setCurrentCropImageIndex(0)
  }

  return {
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
  }
}
