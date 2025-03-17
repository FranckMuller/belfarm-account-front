import { type FC, memo, useRef, useState } from 'react'
import ReactImageCrop, { type PixelCrop } from 'react-image-crop'
import clsx from 'clsx'

import type { TImageWithSizes } from '@/shared/utils/images'

type Props = {
  className?: string
  aspect?: number
  image: TImageWithSizes & {
    crop?: PixelCrop
  }
  onCropComplete: (crop: PixelCrop, sizes: { width: number; height: number }) => void
}

export const ImageCropperComponent: FC<Props> = ({ className, aspect = 1 / 1, image, onCropComplete }) => {
  const [crop, setCrop] = useState<PixelCrop>()
  const imageRef = useRef<HTMLImageElement>(null)

  if (!image?.url) return null

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const size = Math.min(e.currentTarget.clientHeight, e.currentTarget.clientWidth)
    setCrop({
      unit: image.crop?.unit ?? 'px',
      y: image.crop?.y ?? 0,
      x: image.crop?.x ?? 0,
      height: image.crop?.height ?? size,
      width: image.crop?.width ?? size,
    })
  }

  const handleCropChange = (crop: PixelCrop) => {
    setCrop(crop)
  }

  const handleCropComplete = (crop: PixelCrop) => {
    if (imageRef.current) {
      onCropComplete(crop, {
        height: imageRef.current.clientHeight,
        width: imageRef.current.clientWidth,
      })
    }
  }

  return (
    <ReactImageCrop
      className={clsx(className)}
      crop={crop}
      aspect={aspect}
      onChange={handleCropChange}
      onComplete={handleCropComplete}
    >
      <div className="max-h-full mx-auto relative">
        <img
          ref={imageRef}
          onLoad={handleImageLoad}
          id="croppImage"
          src={image.url}
          width={image.width}
          height={image.height}
          alt="photo"
          className="max-h-[calc(100vh-9.25rem-196px)] max-w-full h-full w-auto"
        />
      </div>
    </ReactImageCrop>
  )
}

export const ImageCropper = memo(ImageCropperComponent)
