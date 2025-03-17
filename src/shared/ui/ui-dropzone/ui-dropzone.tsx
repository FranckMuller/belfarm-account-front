import type { FC, PropsWithChildren } from 'react'
import { Children, cloneElement, isValidElement, ReactElement } from 'react'
import Dropzone from 'react-dropzone'
import { IoCloudUploadOutline } from 'react-icons/io5'
import clsx from 'clsx'

import { UiButton } from '../ui-button'
import { UiSpinner } from '../ui-spinner'

import { ImagesPreview } from './images-preview'

import styles from './ui-dropzone.module.scss'

type Props = {
  className?: string
  isError?: boolean
  multiple?: boolean
  isLoading?: boolean
  onDrop: (files: File[]) => void
  title: string
  files?: File[]
} & PropsWithChildren

interface UiDropzone extends FC<Props> {
  ImagesPreview: typeof ImagesPreview
}

const UiDropzone: UiDropzone = ({ className, title, isError, multiple, isLoading, files, onDrop, children }) => {
  return (
    <div className="relative">
      <Dropzone multiple={!!multiple} onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => {
          return (
            <div className={clsx(className, styles['dropzone'], isError && styles['error'])}>
              {!files && (
                <div className={clsx(styles['dropzone-body'])} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <IoCloudUploadOutline className="w-10 h-10 mb-3" />
                  <p>{title}</p>
                  <p className="mb-3">или</p>
                  <UiButton type="button" size="sm" variant="secondary">
                    Выбрать файл
                  </UiButton>
                </div>
              )}

              {Children.map(children, (child) => {
                if (isValidElement(child) && child.type === ImagesPreview) {
                  return cloneElement(child as ReactElement, {
                    getRootProps,
                    getInputProps,
                  })
                }
                return child
              })}
            </div>
          )
        }}
      </Dropzone>
      {isLoading && <UiSpinner className="absolute inset-0 bg-black/50" />}
    </div>
  )
}

UiDropzone.ImagesPreview = ImagesPreview

export { UiDropzone }
