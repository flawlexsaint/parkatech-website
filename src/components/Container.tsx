import { FC } from "react";
import { cn } from "../lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={cn(className, "mx-auto")}>{children}</div>;
};

export default Container;
