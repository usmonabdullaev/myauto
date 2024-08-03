import React from "react";

import { cn } from "../service/functions.ts";

interface Props {
  className?: string;
  items: { id: number; name: string; image: string }[];
}

export const ServicesRange: React.FC<Props> = ({ className, items }) => {
  return (
    <div className={cn("grid grid-cols-4 gap-8", className)}>
      {items.map((item) => (
        <div key={item.id} className="w-full">
          <img
            src={item.image}
            alt={item.name}
            width={300}
            height={300}
            className="rounded-2xl h-[300px] w-full object-cover"
          />
          <p className="text-xl font-semibold mt-2">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
