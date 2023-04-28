import React from "react";

type HeadingTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  titleClass?: string;
  subtitleClass?: string;
  center?: boolean;
  mx?: boolean;
};

const HeadingTitle: React.FC<HeadingTitleProps> = ({
  title,
  subtitle,
  className,
  titleClass,
  subtitleClass,
  center,
  mx,
}) => {
  return (
    <div
      className={`${className}
        ${center ? "text-center" : "text-left"}
        ${mx ? "mx-0" : "mx-auto"}
    "w-full max-w-xl  mb-4 p-4 mb-8"`}
    >
      <h1
        className={`${titleClass} " text-slate-600 text-3xl md:text-4xl font-medium first-letter:text-4xl first-letter:bg-yellow-400 first-letter:px-3 first-letter:rounded-md "`}
      >
        {title ?? "Title"}
      </h1>
      <h3 className={`${subtitleClass} text-slate-400`}>{subtitle ?? ""}</h3>
    </div>
  );
};

export default HeadingTitle;
