import { useState, useEffect } from "react";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className=" fixed z-50 bottom-36 p-2 rounded-xl right-4 transition-all duration-150 bg-blue-500 text-slate-100 hover:bg-yellow-400 hover:text-slate-600"
          onClick={handleClick}
        >
          <BsFillArrowUpCircleFill size={20} />
        </button>
      )}
    </>
  );
}

export default ScrollButton;
