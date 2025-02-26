import React, { CSSProperties } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={` ${className || ""}`} style={style}>
      {children}
    </div>
  );
};
