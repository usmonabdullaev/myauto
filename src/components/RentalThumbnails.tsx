import React from "react";

import { cn } from "../service/functions.ts";

interface Props {
  className?: string;
  images: number[];
  setActiveImage: (index: number) => void;
  activeImage: number;
}

export const RentalThumbnails: React.FC<Props> = ({
  className,
  images,
  setActiveImage,
  activeImage,
}) => {
  return (
    <div
      className={cn("flex flex-wrap gap-2 container mx-auto my-5", className)}
    >
      {images.map((i, index) => (
        <img
          key={i}
          src="/auto-dubai-banner.png"
          alt="Car"
          onClick={() => setActiveImage(index)}
          className={`size-20 rounded-md object-cover cursor-pointer ${
            activeImage === index ? "opacity-100" : "opacity-60"
          }`}
        />
      ))}
    </div>
  );
};
