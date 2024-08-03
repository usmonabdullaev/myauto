import React from "react";
import { cn } from "../../service/functions.ts";

interface Props {
  className?: string;
  image: string;
  name: string;
  characteristics: {
    id: number;
    key: string;
    value: string;
  }[];
  priceDay: number;
}

export const ReantalCard: React.FC<Props> = ({
  className,
  image,
  name,
  characteristics,
  priceDay,
}) => {
  return (
    <div className={cn("w-full", className)}>
      <img
        src={image}
        alt={name}
        width={300}
        height={280}
        className="rounded-2xl h-[280px] w-full object-cover"
      />
      <p className="text-xl font-semibold mt-2">{name}</p>

      <div className="flex flex-col mt-2 gap-1">
        {characteristics.slice(0, 6).map((i) => (
          <div key={i.id} className="flex items-center justify-between">
            <p className="text-gray-500">{i.key}</p>
            <p className="text-slate-900">{i.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold">от {priceDay} сом. в день</p>
        <button className="bg-slate-900 text-white rounded-lg px-4 py-2 font-bold">
          Заказать
        </button>
      </div>
    </div>
  );
};
