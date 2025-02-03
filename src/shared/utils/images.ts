const isFileImageCheck = (file: File): boolean => {
  const acceptedImageTypes = ["image/jpeg", "image/png"]

  return file && acceptedImageTypes.includes(file["type"])
}

export const getImageUrl = (file: File): string => {
  return URL.createObjectURL(file)
}

export const imageToBase64 = async (file: File): Promise<string | null> => {
  const isImage = isFileImageCheck(file)

  if (!isImage) return null

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => resolve(reader.result as string), false)
    reader.readAsDataURL(file)
  })
}

export type TImageWithSizes = {
  url: string
  width: number
  height: number
  name: string
}

export const getImageUrlWithOriginalSizes = async (file: File): Promise<TImageWithSizes> => {
  const url = getImageUrl(file)

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = url
    img.onload = () => {
      resolve({
        url: url,
        width: img.width,
        height: img.height,
        name: file.name,
      })
    }
    img.onerror = () => reject(new Error("image load rejected"))
  })
}
