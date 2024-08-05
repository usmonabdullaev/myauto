import React, { useEffect, useRef, useState } from "react";
import { CarouselRef } from "antd/es/carousel/index";
import Slider from "react-slick";
import { Carousel } from "antd";

import { cn } from "../service/functions.ts";
import { IMAGE_URL } from "../service/env.tsx";

interface Props {
  className?: string;
  images: {
    id: number;
    image: string;
    main: boolean;
  }[];
}

export const ProductSlider: React.FC<Props> = ({ className, images }) => {
  const [slider, setSlider] = useState<any>(null);
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderRef = useRef<CarouselRef>(null);

  useEffect(() => {
    slider?.slickGoTo?.(activeSlider);
  }, [activeSlider, slider]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    draggable: false,
  };

  return (
    <div
      className={cn("grid grid-cols-12 items-start justify-start", className)}
    >
      <div className="col-span-2 h-full max-h-[100%] overflow-hidden flex flex-col items-center gap-y-1 justify-center">
        <Slider {...settings} ref={setSlider}>
          {images.map((i, index) => (
            <div key={i.id} className="relative">
              {activeSlider === index && (
                <div
                  className="absolute right-[100%] top-1/2"
                  style={{ transform: "translate(0, -50%)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#008eff"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </div>
              )}
              <div
                onClick={() => sliderRef.current?.goTo(index)}
                className={`w-[86px] h-[86px] rounded-lg border-[#008eff] cursor-pointer ${
                  activeSlider === index ? "border-2" : ""
                }`}
                style={{
                  backgroundImage: `url(${IMAGE_URL}${i.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[89%] col-span-10 select-none">
        <Carousel
          ref={sliderRef}
          className="border-2 hidden"
          afterChange={setActiveSlider}
          nextArrow={
            <div>
              <button className="bg-[#5a5a5a94] rounded-md -ml-5 size-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </button>
            </div>
          }
          prevArrow={
            <div>
              <button className="bg-[#5a5a5a94] rounded-md -mr-5 size-10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fff"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </button>
            </div>
          }
          rootClassName="custom-slider"
          infinite={false}
          dots={false}
          draggable
          arrows
        >
          {images.map((i) => (
            <div key={i.id} className="h-[400px] w-full">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${IMAGE_URL}${i.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              ></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
