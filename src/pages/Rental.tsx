import React, { useEffect, useState } from "react";
import { Button } from "antd";

import { ModelsGroup } from "../components/ModelsGroup.tsx";
import { ServicesRange } from "../components/ServicesRange.tsx";
import { ReantalCard } from "../components/rental/index.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import { getModels } from "../service/slices/data.ts";

const Reantal = () => {
  const [activeModel, setActiveModel] = useState(0);
  const dispatch = useAppDispatch();
  const { models } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getModels());
  }, [dispatch]);

  const modelsGroupOptions = models
    .map((model) => ({
      id: model.id,
      name: model.name,
    }))
    .slice(0, 10);

  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div
          className="rounded-[40px] flex items-center h-[300px] bg-[#f9f9f9]"
          style={{ boxShadow: "0 4px 66px 0 #00000036" }}
        >
          <img
            src="/rental-banner.png"
            alt="Banner"
            className="h-full object-cover"
          />
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-4">
              Арендуйте автомобиль
              <br />
              без лишних забот
            </h2>
            <p className="mb-5">
              У нас всегда есть то, что вам нужно для комфортного
              <br /> передвижения в городе или в поездке с друзьями
            </p>
            <Button type="primary" size="large">
              Бронировать авто
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10 py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Прокат автомобилей в Душанбе</h1>

          <ModelsGroup
            items={[{ id: 0, name: "Все авто" }, ...modelsGroupOptions]}
            onClick={setActiveModel}
            className="my-6"
            active={activeModel}
          />

          <div>
            {false ? (
              <p className="text-xl font-semibold text-center">Пусто</p>
            ) : (
              <div className="grid grid-cols-4 gap-8">
                {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
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
            )}
          </div>

          <h2 className="text-2xl font-bold mt-10">
            Мы предоставляем широкий спектр услуг по прокату авто в Душанбе
          </h2>
          <p className="mt-2 text-gray-500">
            Найдем решение для всех поставленных задач.
          </p>

          <ServicesRange
            items={[
              {
                id: 1,
                name: "Аренда авто в аэропорту",
                image: "/rental-banner.png",
              },
              {
                id: 2,
                name: "Аренда авто на мероприятия",
                image: "/rental-banner.png",
              },
              {
                id: 3,
                name: "Аренда без водителя",
                image: "/rental-banner.png",
              },
              {
                id: 4,
                name: "Аренда с водителем",
                image: "/rental-banner.png",
              },
              {
                id: 5,
                name: "Инвестиции в прокат",
                image: "/rental-banner.png",
              },
              {
                id: 6,
                name: "Трансфер в гостиницу",
                image: "/rental-banner.png",
              },
              {
                id: 7,
                name: "Трансфер на вокзал",
                image: "/rental-banner.png",
              },
              {
                id: 8,
                name: "Фотосессии с авто",
                image: "/rental-banner.png",
              },
            ]}
            className="mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Reantal;
