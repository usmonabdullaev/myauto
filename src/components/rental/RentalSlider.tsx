import React, { LegacyRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";

import { cn } from "../../service/functions.ts";

interface Props {
  className?: string;
  setSliderRef: LegacyRef<CarouselRef> | null;
  setActiveImage: (index: number) => void;
  images: number[];
}

export const RentalSlider: React.FC<Props> = ({
  className,
  setSliderRef,
  setActiveImage,
  images,
}) => {
  return (
    <Carousel
      className={cn("container mx-auto", className)}
      ref={setSliderRef}
      beforeChange={(_, next) => setActiveImage(next)}
      arrows
      infinite
      draggable
    >
      {images.map((i, index) => (
        <div key={i}>
          <div className="h-[400px] m-0 rounded-lg relative">
            <img
              src="/auto-dubai-banner.png"
              alt="Car"
              className="h-full w-full object-cover rounded-lg"
            />

            <div className="absolute bottom-5 left-5 bg-slate-800 text-white font-medium px-4 py-2 rounded-md">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-camera-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
                </svg>
                {index + 1} / {images.length} фото
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
