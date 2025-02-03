import type { FC } from "react"
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone"
import clsx from "clsx"

import { PlusIcon } from "../icons/plus-icon"

type Props = {
  className?: string
  imagesUrls?: string[]
  getRootProps?: <T extends DropzoneRootProps>(props?: T) => T
  getInputProps?: <T extends DropzoneInputProps>(props?: T) => T
}
export const ImagesPreview: FC<Props> = ({ imagesUrls, getRootProps, getInputProps, className }) => {
  if (!imagesUrls) return null

  return (
    <div className={clsx(className, "flex gap-2 overflow-x-auto")}>
      {imagesUrls && getRootProps && getInputProps && (
        <>
          <div
            className="flex items-center justify-center flex-1 min-w-28 p-1 cursor-pointer border border-dashed border-gray-400"
            {...getRootProps()}
          >
            <PlusIcon />
            <input {...getInputProps()} />
          </div>
          {imagesUrls.map((file, index) => (
            <div key={index} className="flex-1 min-w-28 border border-gray-400 p-1">
              <img src={file} alt="" />
            </div>
          ))}
        </>
      )}
    </div>
  )
}
