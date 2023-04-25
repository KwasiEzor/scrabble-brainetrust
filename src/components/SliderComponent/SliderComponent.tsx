import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../../assets/images/badge-carousel-ods.svg";
import SliderImg2 from "../../assets/images/badge-carousel-scrabble.svg";
import SliderImg3 from "../../assets/images/badge-duplicate.svg";

interface SliderComponentProps {
  images?: [];
}
const SliderComponent: React.FC<SliderComponentProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="mx-auto  lg:-mt-24 pb-14">
      <Slider {...settings} className="px-8">
        <div className=" flex items-center justify-center ">
          <img
            src={`${
              SliderImg1
                ? SliderImg1
                : "https://source.unsplash.com/random/600x400"
            }`}
            alt="Slider item"
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={`${
              SliderImg2
                ? SliderImg2
                : "https://source.unsplash.com/random/600x400"
            }`}
            alt="Slider item"
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={`${
              SliderImg3
                ? SliderImg3
                : "https://source.unsplash.com/random/600x400"
            }`}
            alt="Slider item"
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={`${
              SliderImg1
                ? SliderImg1
                : "https://source.unsplash.com/random/600x400"
            }`}
            alt="Slider item"
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={`${
              SliderImg2
                ? SliderImg2
                : "https://source.unsplash.com/random/600x400"
            }`}
            alt="Slider item"
            className="w-full max-w-xs mx-auto"
          />
        </div>
        <div className=" flex items-center justify-center">
          <img
            src={`${
              SliderImg3
                ? SliderImg3
                : "https://source.unsplash.com/random/600x400"
            }`}
            alt="Slider item"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
