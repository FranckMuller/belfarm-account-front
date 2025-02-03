import { FC } from "react"

type Props = {
  className?: string
}

export const PlusIcon: FC<Props> = ({ className }) => {
  return (
    <svg className={className} width="29" height="29" viewBox="0 0 29 29">
      <g fill="currentColor" fillRule="nonzero">
        <path d="M14.5 0a.5.5 0 01.5.5v28a.5.5 0 11-1 0V.5a.5.5 0 01.5-.5zm0 1a.5.5 0 00.5-.5v28a.5.5 0 10-1 0V.5a.5.5 0 00.5.5z"></path>
        <path d="M29 14.5a.5.5 0 01-.5.5H.5a.5.5 0 110-1h28a.5.5 0 01.5.5zm-1 0a.5.5 0 00.5.5H.5a.5.5 0 100-1h28a.5.5 0 00-.5.5z"></path>
      </g>
    </svg>
  )
}
