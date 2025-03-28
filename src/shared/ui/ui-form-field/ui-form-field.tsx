import type { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'

import { CropImageInput } from './crop-image-input'
import { Error } from './error'
import { Input } from './input'
import { Label } from './label'
import { Textarea } from './textarea'

type Props = {
  className?: string
} & PropsWithChildren

interface UiFormField extends FC<Props> {
  Input: typeof Input
  Label: typeof Label
  Textarea: typeof Textarea
  Error: typeof Error
  CropImageInput: typeof CropImageInput
}

const UiFormField: UiFormField = ({ className, children }) => {
  return <div className={clsx(className, 'relative w-full')}>{children}</div>
}

UiFormField.Input = Input
UiFormField.Label = Label
UiFormField.Textarea = Textarea
UiFormField.Error = Error
UiFormField.CropImageInput = CropImageInput

export { UiFormField }
