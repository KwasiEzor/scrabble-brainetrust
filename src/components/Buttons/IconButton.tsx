import React from "react";
import { IconType } from "react-icons";
import { BsArrowRightCircle } from "react-icons/bs";

interface IconButtonProps {
  children?: React.ReactNode;
  className?: string;
  text?: string;
  color?: string;
  icon: IconType;
  size?: number;
}

const IconButton: React.FC<IconButtonProps> = ({
  size,
  children,
  className,
  text,
  color,
  icon: Icon = BsArrowRightCircle,
  ...props
}) => {
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
      className={`
    flex items-center flex-nowrap rounded-lg text-white shadow-lg
    ${color || "bg-gray-600"}
    ${className}
    `}
    >
      <span className="p-1">
        <Icon size={size ?? 24} />
      </span>
      {children}
      <div
        style={{
          width: hover ? ref.current?.offsetWidth || 0 : 0,
        }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  );
};

export default IconButton;
