import React from "react";

import { cn } from "../service/functions.ts";

interface Props {
  className?: string;
  active: number;
  items: {
    id: number;
    name: string;
  }[];
  onClick: (id: number) => void;
}

export const ModelsGroup: React.FC<Props> = ({
  className,
  active,
  items,
  onClick,
}) => {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onClick(item.id)}
          className={cn(
            "bg-gray-200 rounded-3xl px-4 py-1 text-gray-400 font-bold",
            active === item.id && "text-slate-700"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
