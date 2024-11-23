import { useCallback, useEffect, useRef, useState } from "react"
import { Control, Controller, FieldValues, Path } from "react-hook-form"
import { FaChevronDown } from "react-icons/fa6"
import clsx from "clsx"

import { useClickOutside } from "../../hooks/use-click-outside"

type Props<T extends FieldValues> = {
  className?: string
  placeholder?: string
  name: Path<T>
  control: Control<T>
  isError?: boolean
  defaultValue?: string
  options: {
    id: string
    value: string
    label: string
  }[]
}

export const UiSelect = <T extends FieldValues>({
  className,
  name,
  placeholder = "",
  control,
  options,
  isError,
  defaultValue,
}: Props<T>) => {
  const isFirstRenderRef = useRef(true)
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | undefined>(defaultValue)

  const toggleOptions = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelect = (value: string, cb: (value: string) => void) => {
    setSelected(value)
    setIsOpen(false)
    cb(value)
  }

  const handleOutsideClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    isFirstRenderRef.current = false
  }, [])

  const ref = useClickOutside(handleOutsideClick)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => {
        if (isFirstRenderRef.current && defaultValue) {
          onChange(defaultValue)
        }
        return (
          <div ref={ref} className={clsx(className, "relative text-xs")}>
            <div
              onClick={toggleOptions}
              className={clsx(
                "flex items-center py-1.5 px-3 border w-full cursor-pointer min-h-[34px]",
                isOpen ? "rounded-t-[3px] border-gray-500" : "rounded-[3px] border-gray-400",
                isError && "border-orange-500"
              )}
            >
              {selected ? (
                <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                  {options.find((option) => option.value === selected)?.label}
                </span>
              ) : (
                <span className="text-gray-700">{placeholder}</span>
              )}
              <span className={clsx("ml-auto", isOpen && "rotate-180")}>
                <FaChevronDown className="text-gray-500" />
              </span>
            </div>
            {isOpen && (
              <ul
                className={clsx(
                  "absolute z-50 bg-white inset-x-0 top-full border border-gray-500 -mt-px rounded-b-[3px]",
                  isError && "border-orange-500"
                )}
              >
                {options.map((option) => (
                  <li
                    key={option.id}
                    className="py-1.5 px-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelect(option.value, onChange)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      }}
    />
  )
}
