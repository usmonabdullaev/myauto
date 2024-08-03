import React from "react";
import { cn } from "../../service/functions.ts";

interface Props {
  className?: string;
  title?: string;
}

interface ItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AdvantageItem: React.FC<ItemProps> = ({ title, description, icon }) => {
  return (
    <div className="border border-gray-200 bg-[#f6f9fc] rounded-xl flex items-center gap-5 p-4">
      <div>{icon}</div>
      <div className="flex flex-col gap-1">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export const RentalAdvantages: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={cn("", className)}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>

      <div className="grid grid-cols-3 gap-8">
        <AdvantageItem
          title={"Быстрое оформление"}
          description={"Срочно нужен автомобиль? Оформим за 20 минут!"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#243c4e"
              className="bi bi-fast-forward-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.79 5.093 8 7.386V5.5a.5.5 0 0 1 .79-.407l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 8 10.5V8.614l-3.21 2.293A.5.5 0 0 1 4 10.5v-5a.5.5 0 0 1 .79-.407" />
            </svg>
          }
        />
        <AdvantageItem
          title={"Прозрачное сотрудничество"}
          description={"Никаких скрытых платежей и подводных камней в договоре"}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#243c4e"
              className="bi bi-person-video"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />
            </svg>
          }
        />
        <AdvantageItem
          title={"Большой автопарк"}
          description={
            "Автомобили эконом, премиум и бизнес-классов на все случаи жизни"
          }
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#243c4e"
              className="bi bi-ev-front-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848Zm6.75.51a.186.186 0 0 0-.23.034L6.05 7.246a.188.188 0 0 0 .137.316h1.241l-.673 2.195a.19.19 0 0 0 .085.218c.075.043.17.03.23-.034l2.88-3.187a.188.188 0 0 0-.137-.316H8.572l.782-2.195a.19.19 0 0 0-.085-.218Z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};
