import React from "react";
import { Tabs, Button } from "antd";
import type { TabsProps } from "antd";

import { cn } from "../service/functions.ts";

interface Props {
  className?: string;
}
/**
 * Характеристики и комплектация
 *
 * @param className className of block (div)
 * @returns JSX
 */
export const RentalTab: React.FC<Props> = ({ className }) => {
  const [activeKey, setActiveKey] = React.useState("characteristics");

  const items: TabsProps["items"] = [
    {
      key: "characteristics",
      label: (
        <Button
          type={activeKey === "characteristics" ? "primary" : "default"}
          size="large"
          className="font-medium"
        >
          Характеристики
        </Button>
      ),
      children: (
        <div>
          <p className="text-base text-slate-900">
            <span className="font-bold">Марка :</span>{" "}
            <span className="font-medium">Mersedes-Benz</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Модель :</span>{" "}
            <span className="font-medium">GLE</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Год выпуска :</span>{" "}
            <span className="font-medium">2024</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Класс :</span>{" "}
            <span className="font-medium">Бизнес</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Цвет :</span>{" "}
            <span className="font-medium">черный</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Кузов :</span>{" "}
            <span className="font-medium">Внедорожник</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Привод :</span>{" "}
            <span className="font-medium">полный</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Тип топлива :</span>{" "}
            <span className="font-medium">АИ-95</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Коробка передач :</span>{" "}
            <span className="font-medium">автомат</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Мощность, л.с. :</span>{" "}
            <span className="font-medium">333</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Объем двигателя, см³ :</span>{" "}
            <span className="font-medium">2996</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Объем топливного бака :</span>{" "}
            <span className="font-medium">100</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Разгон до 100 км./ч., сек. :</span>{" "}
            <span className="font-medium">6</span>
          </p>
          <p className="text-base text-slate-900">
            <span className="font-bold">Количество посадочных мест :</span>{" "}
            <span className="font-medium">5</span>
          </p>
        </div>
      ),
    },
    {
      key: "complectation",
      label: (
        <Button
          size="large"
          type={activeKey === "complectation" ? "primary" : "default"}
          className="font-medium"
        >
          Комплектация
        </Button>
      ),
      children: (
        <div>
          <p className="text-base text-slate-900 font-bold">
            1. Mersedes-Benz GLE
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className={cn("", className)}>
      <Tabs
        defaultActiveKey="characteristics"
        activeKey={activeKey}
        items={items}
        onChange={setActiveKey}
      />
    </div>
  );
};
