import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export default Container;
