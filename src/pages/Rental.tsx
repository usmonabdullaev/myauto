import React, { useState } from "react";
import { Button } from "antd";

import { ModelsGroup } from "../components/ModelsGroup.tsx";
import { ServicesRange } from "../components/ServicesRange.tsx";

const Reantal = () => {
  const [activeModel, setActiveModel] = useState(0);

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
            items={[
              { id: 0, name: "Все авто" },
              { id: 1, name: "Kia" },
              { id: 2, name: "Hyundai" },
              { id: 3, name: "Toyota" },
              { id: 4, name: "Mazda" },
              { id: 5, name: "BMW" },
              { id: 6, name: "Dodge" },
              { id: 7, name: "Ford" },
              { id: 8, name: "Cadillac" },
              { id: 9, name: "Mersedes-Benz" },
              { id: 10, name: "Jac" },
            ]}
            onClick={setActiveModel}
            className="my-6"
            active={activeModel}
          />

          <div>
            {false ? (
              <p className="text-xl font-semibold text-center">Пусто</p>
            ) : (
              <div>
                
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
