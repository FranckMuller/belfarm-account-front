import { useCallback, useMemo, useState } from "react"
import type { PixelCrop } from "react-image-crop"

import { getCroppedImg, type TCroppedImage } from "@/shared/utils/canvas"
import { mapBlobToFile } from "@/shared/utils/files"
import { getImageUrl } from "@/shared/utils/images"

export const useImageCropInput = () => {
  const [files, setFiles] = useState<File[]>()
  const [croppedImage, setCroppedImage] = useState<TCroppedImage>()
  const [previewImage, setPreviewImage] = useState<string>()

  const handleDropImage = (files: File[]) => {
    setFiles(files)
  }

  const handleCropComplete = useCallback(
    async (crop: PixelCrop, displayedImage: HTMLImageElement) => {
      try {
        if (files?.length) {
          const blobImageUrl = getImageUrl(files[0])
          if (blobImageUrl && displayedImage) {
            const croppedImage = await getCroppedImg(blobImageUrl, crop, {
              width: displayedImage.clientWidth,
              height: displayedImage.clientHeight,
            })

            if (croppedImage) {
              setCroppedImage(croppedImage)
            }
          }
        }
      } catch (error) {
        console.error("Ошибка обрезки изображения:", error)
      }
    },
    [files]
  )

  const handleSaveButtonClick = (cb: (img: File) => void) => {
    if (files && croppedImage?.image) {
      const img = mapBlobToFile(croppedImage.image, files[0].name, "image/jpg")
      setFiles(undefined)
      setCroppedImage(undefined)
      setPreviewImage(croppedImage.url)
      cb(img)
    }
  }

  const blobImageUrl = useMemo(() => {
    return files?.length ? getImageUrl(files[0]) : undefined
  }, [files])

  return {
    croppedImage,
    previewImage,
    blobImageUrl,
    handleDropImage,
    handleCropComplete,
    handleSaveButtonClick,
  }
}
