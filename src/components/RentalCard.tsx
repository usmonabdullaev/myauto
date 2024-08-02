import React from "react";
import { cn } from "../service/functions.ts";

interface Props {
  className?: string;
  image: string;
  name: string;
  characteristics: {
    [key: string]: string;
  };
}

export const ReantalCard: React.FC<Props> = ({
  className,
  image,
  name,
  characteristics,
}) => {
  return (
    <div className={cn("w-[23%]", className)}>
      <img
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-2xl size-[300px] object-cover"
      />
      <p className="text-xl font-semibold mt-2">{name}</p>
    </div>
  );
};
