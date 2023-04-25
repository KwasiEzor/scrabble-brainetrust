import { Button } from "flowbite-react";
import React from "react";

type CustomButtonProps = {
  size?: string;
  primary?: boolean;
  secondary?: boolean;
  children?: React.ReactNode;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  size,
  primary,
  secondary,
  children,
  className,
}) => {
  return (
    <Button
      size={size}
      className={`${
        primary ??
        "font-extrabold bg-gradient-to-r from-blue-600  to-sky-400 uppercase tracking-wide hover:tracking-widest transition-all max-w-fit"
      }
      ${
        secondary ??
        "font-extrabold bg-gradient-to-r from-yellow-400  to-yellow-300 uppercase tracking-wide hover:tracking-widest transition-all max-w-fit"
      }
      ${className}
      `}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
