import type { FC } from "react"
import type { Crop, PixelCrop } from "react-image-crop"

import { UiButton } from "@/shared/ui/ui-button"
import { UiModal } from "@/shared/ui/ui-modal"

import { ImageCropper } from "./image-cropper"

type Props = {
  title: string
  imageUrl: string
  initCrop: PixelCrop
  previewImageUrl?: string
  aspect?: number
  isCropOnMount?: boolean
  onCropComplete: (crop: PixelCrop) => void
  onSaveButtonClick: () => void
}

export const ImageCropModal: FC<Props> = ({
  title,
  imageUrl,
  initCrop,
  previewImageUrl,
  aspect,
  isCropOnMount,
  onCropComplete,
  onSaveButtonClick,
}) => {
  return (
    <UiModal isOpen={!!imageUrl}>
      <UiModal.Header>{title}</UiModal.Header>
      <UiModal.Body>
        <div className="flex gap-5">
          <ImageCropper
            className="flex-1"
            imageUrl={imageUrl}
            aspect={aspect}
            isCropOnMount={isCropOnMount}
            onCropComplete={onCropComplete}
          />

          <div className="flex-1">
            {previewImageUrl && (
              <img src={previewImageUrl} width={initCrop.width * 2} height={initCrop.height * 2} alt="preiew" />
            )}
          </div>
        </div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton onClick={onSaveButtonClick}>Сохранить</UiButton>
      </UiModal.Footer>
    </UiModal>
  )
}
