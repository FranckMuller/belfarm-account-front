import type { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import { IoCloseOutline } from "react-icons/io5"
import clsx from "clsx"

import { Body } from "./body"
import { Footer } from "./footer"
import { Header } from "./header"

type Props = {
  className?: string
  isOpen: boolean
  size?: "md" | "full" | "content"
  onClose: () => void
} & PropsWithChildren

interface UiModal extends FC<Props> {
  Header: typeof Header
  Body: typeof Body
  Footer: typeof Footer
}

const UiModal: UiModal = ({ className, isOpen = false, onClose, size = "md", children }) => {
  if (!isOpen) return null

  const handleClose = (e: React.MouseEvent) => {
    const inModal = (e.target as HTMLElement).closest("[data-id=modal]")
    if (inModal) return
    onClose()
  }

  const modal = (
    <div
      onClick={handleClose}
      className="bg-gray-700/60 fixed inset-0 backdrop-blur overflow-y-auto z-[100] md:py-10 md:px-14"
    >
      <div
        data-id="modal"
        className={clsx(
          className,
          "bg-white p-4 min-h-[320px] mx-auto relative flex justify-center flex-col h-[100vh] md:rounded-lg",
          {
            md: "max-w-[840px]",
            full: "mx-5",
            content: "w-fit max-w-full",
          }[size]
        )}
      >
        {children}
        <button
          onClick={onClose}
          className="
            w-8 h-8 rounded flex items-center justify-center
            hover:bg-white/40 md:bg-white/10 transition-colors
            absolute right-0 top-0 md:left-[calc(100%+12px)]"
        >
          <IoCloseOutline className="text-black md:text-white w-6 h-6" />
        </button>
      </div>
    </div>
  )

  return createPortal(modal, document && (document.getElementById("modal") as HTMLDivElement))
}

UiModal.Header = Header
UiModal.Body = Body
UiModal.Footer = Footer

export { UiModal }
