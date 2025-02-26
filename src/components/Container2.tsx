import React, { CSSProperties } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Container2: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={`container p-8 mx-auto${className || ""}`} style={style}>
      {children}
    </div>
  );
};
