import type { PixelCrop } from "react-image-crop"

export type TCroppedImage = {
  url: string
  image: Blob
}

export type TImageSizes = {
  width: number
  height: number
}

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image: HTMLImageElement = new Image()
    image.addEventListener("load", () => resolve(image))
    image.addEventListener("error", (error) => reject(error))
    image.setAttribute("crossOrigin", "anonymous")
    image.src = url
  })

export const getCroppedImg = async (
  imageSrc: string,
  pixelCrop: PixelCrop,
  displayedImageSizes: TImageSizes,
  flip = { horizontal: false, vertical: false }
): Promise<TCroppedImage | null> => {
  const image = await createImage(imageSrc)
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) {
    return null
  }

  // set canvas size to match the bounding box
  canvas.width = image.width
  canvas.height = image.height

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(image.width / 2, image.height / 2)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  const croppedCanvas = document.createElement("canvas")
  const croppedCtx = croppedCanvas.getContext("2d")

  if (!croppedCtx) {
    return null
  }
  // Scale the crop coordinates to the original image size
  const scaleX = image.naturalWidth / displayedImageSizes.width
  const scaleY = image.naturalHeight / displayedImageSizes.height

  const scaledCrop = {
    x: pixelCrop.x * scaleX,
    y: pixelCrop.y * scaleY,
    width: pixelCrop.width * scaleX,
    height: pixelCrop.height * scaleY,
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = scaledCrop.width
  croppedCanvas.height = scaledCrop.height

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    scaledCrop.x,
    scaledCrop.y,
    scaledCrop.width,
    scaledCrop.height,
    0,
    0,
    scaledCrop.width,
    scaledCrop.height
  )

  // As Base64 string
  // return croppedCanvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    croppedCanvas.toBlob((file) => {
      if (file) {
        resolve({ url: URL.createObjectURL(file), image: file })
      } else {
        reject(new Error("Canvas is empty"))
      }
    }, "image/jpeg")
  })
}
