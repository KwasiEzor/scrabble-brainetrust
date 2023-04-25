import { Button } from "flowbite-react";
import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import IconButton from "../../components/Buttons/IconButton";

interface BlogCardProps {
  title: string;
  subtitle?: string;
  author?: string;
  content?: string;
  imgUrl?: string;
  post?: [] | undefined;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  subtitle,
  author,
  content,
  imgUrl,
}) => {
  return (
    <article className="rounded-lg md:max-w-sm w-full cursor-pointer min-h-96 shadow-md relative">
      <img
        src={`${
          imgUrl ??
          "https://images.unsplash.com/photo-1583334648584-6c2ba1fb41cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }`}
        alt={`${title ?? "Blog title"} `}
        className="w-full object-cover h-40 rounded-t-lg mb-4"
      />
      <div className="p-2">
        <h2 className="text-base font-medium text-blue-500 px-2">
          {title ?? "Blog Title"}
        </h2>
        <h5 className="text-xs text-slate-500 px-2 mb-2">
          {subtitle ?? "Subtitle"}
        </h5>
        <p className="text-base font-normal p-2 text-slate-500 bg-white h-full">
          {content?.slice(0, 50) ??
            "Lorem ipsum dolor sit amet non reprehenderit sit quo autem. Sequi modi voluptatem rem sunt expedita ipsa, nemo provident enim dolor impedit ducimus quos quo consequatur fuga at! Minima fuga similique pariatur eaque!"}{" "}
        </p>
        <div className="w-full p-4 ">
          <IconButton
            icon={BsFillArrowRightSquareFill}
            text="Suite"
            color="bg-blue-600"
            className="absolute left-2 bottom-4"
          />
          {/* <Button
            size={"sm"}
            gradientMonochrome="info"
            className="tracking-wide uppercase absolute right-2 bottom-2 overflow-x-hidden group transition-all"
          >
            lire
            
            <BsFillArrowRightSquareFill className="translate-x-[200%] hidden group-hover:block group-hover:translate-x-0 group-hover:ml-2 transition-transform group-hover:duration-300" />
          </Button> */}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
