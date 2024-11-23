import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = { className?: string } & PropsWithChildren;

export const Footer: FC<Props> = ({ className, children }) => {
  return (
    <div className={clsx(className, "mt-auto pt-3 pb-5 px-5")}>{children}</div>
  );
};
