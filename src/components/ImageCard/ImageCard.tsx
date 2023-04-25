import React from "react";

interface ImageCardProps {
  imgSrc: string;
  alt?: string;
  className?: string;
  children: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({
  alt,
  children,
  className,
  imgSrc,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`relative min-w-xs max-w-fit overflow-hidden border-4 border-transparent hover:border-yellow-300/70 hover:shadow-xl transition-colors rounded-2xl shadow-lg group ${className}`}
    >
      <img
        src={imgSrc}
        alt={`${alt ?? "card image"}`}
        className="transition-transform group-hover:scale-110 duration-150"
      />
      <div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent text-white text-shadow">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
