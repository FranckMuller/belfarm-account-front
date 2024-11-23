import type { FC, PropsWithChildren } from "react"
import { BsQuestionCircle } from "react-icons/bs"
import clsx from "clsx"

import { UiTooltip } from "../ui-tooltip/ui-tooltip"

type Props = {
  className?: string
  htmlFor?: string
  tooltip?: string
} & PropsWithChildren

export const Label: FC<Props> = ({ className, tooltip, htmlFor, children }) => {
  return (
    <label className={clsx(className, "font-semibold mb-2 text-xs text-gray-700 flex items-center")} htmlFor={htmlFor}>
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">{children}</span>

      {tooltip && (
        <UiTooltip className="ml-2" text={tooltip}>
          <BsQuestionCircle className="w-4 h-4" />
        </UiTooltip>
      )}
    </label>
  )
}
