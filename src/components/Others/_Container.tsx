import React from "react";

interface _ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const _Container: React.FC<_ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`${className} "max-w-[1440px] md:max-w-full mx-auto px-4 sm:p-0 "`}
      {...props}
    >
      {children}
    </div>
  );
};

export default _Container;
