import type { FC } from "react"
import Dropzone from "react-dropzone"
import { IoCloudUploadOutline } from "react-icons/io5"
import clsx from "clsx"

import { UiButton } from "./ui-button"

type Props = {
  className?: string
  isError?: boolean
  multiple?: boolean
  onDrop: (files: File[]) => void
}

export const UiDropzone: FC<Props> = ({ className, isError, multiple, onDrop }) => {
  return (
    <Dropzone multiple={multiple} onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => {
        return (
          <div className={clsx(className, "flex flex-col items-start gap-5 bg-white text-sm")}>
            <div
              className={clsx(
                "flex flex-col w-full items-center border border-dashed border-border-input rounded-[3px] p-5 text-gray-500",
                isError && "border-orange-500"
              )}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <IoCloudUploadOutline className="w-10 h-10 mb-3" />
              <p>Перетяните ваши фото сюда</p>
              <p className="mb-3">или</p>
              <UiButton type="button" size="sm">
                Выбрать файл
              </UiButton>
            </div>
          </div>
        )
      }}
    </Dropzone>
  )
}
