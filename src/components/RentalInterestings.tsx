import React from "react";

import { cn } from "../service/functions.ts";
import { ReantalCard } from "./RentalCard.tsx";

interface Props {
  className?: string;
  title?: string;
  items?: number[];
}

export const RentalInterestings: React.FC<Props> = ({
  className,
  title,
  items,
}) => {
  return (
    <div className={cn("", className)}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-4 gap-8">
        {items?.map((_, i) => (
          <ReantalCard
            key={i}
            image="/rental-banner.png"
            name="Mersedes-Benz E-Class E 220 D Automatic"
            characteristics={[
              { id: 1, key: "Хэтчбек", value: "" },
              { id: 2, key: "Год выпуска", value: "2024" },
              { id: 3, key: "Привод", value: "полный" },
              { id: 4, key: "Объем двигателя", value: "2999" },
              { id: 5, key: "Разгон до 100 км/ч, сек", value: "4.5" },
              { id: 6, key: "Мощность, л.с.", value: "435" },
            ]}
            priceDay={250}
          />
        ))}
      </div>
    </div>
  );
};
