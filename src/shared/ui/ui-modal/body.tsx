import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

type Props = { className?: string } & PropsWithChildren;

export const Body: FC<Props> = ({ className, children }) => {
  return <div className={clsx(className, "px-5 pb-5")}>{children}</div>;
};
