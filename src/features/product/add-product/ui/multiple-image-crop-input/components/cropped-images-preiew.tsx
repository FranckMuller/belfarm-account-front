import type { FC } from "react"
import { IoCloseOutline } from "react-icons/io5"
import clsx from "clsx"

import { UiSpinner } from "@/shared/ui/ui-spinner"
import type { TCroppedImage } from "@/shared/utils/canvas"

type Props = {
  images: Array<TCroppedImage | null>
  activeImageIndex: number
  isCropLoading?: boolean
  onImageClick: (index: number) => void
  onDelete: (index: number) => void
}

export const CroppedImagesPreview: FC<Props> = ({
  images,
  activeImageIndex,
  isCropLoading,
  onImageClick,
  onDelete,
}) => {
  return (
    <div className="flex mt-5 overflow-x-auto -mx-2 md:-mx-2">
      {images.map((image, index) =>
        image ? (
          <div key={index} className="flex-[0_0_33.333333%] max-w-[160px] md:min-w-40 md:flex-[0_0_25%] px-1 md:px-2">
            <div
              className={clsx(
                "overflow-hidden border transition-colors hover:border-gray-600 p-1 relative",
                activeImageIndex === index && "border-gray-600",
                activeImageIndex !== index && "cursor-pointer border-transparent"
              )}
            >
              {activeImageIndex === index && isCropLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <UiSpinner />
                </div>
              )}
              <img alt="preview" src={image.url} onClick={() => onImageClick(index)} />

              <button
                className="w-5 h-5 flex items-center justify-center bg-black/40  transition-colors absolute right-1 top-1"
                onClick={() => onDelete(index)}
              >
                <IoCloseOutline className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}
