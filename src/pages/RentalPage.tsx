import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarouselRef } from "antd/es/carousel";

import {
  RentalSlider,
  RentalThumbnails,
  RentalFAQ,
  RentalInterestings,
  RentalAdvantages,
  RentalTab,
  RentalDatePicker,
} from "../components/rental/index.ts";
import { Button } from "antd";

const RentalPage = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [days, setDays] = useState(0);
  let [sliderRef, setSliderRef] = useState<CarouselRef | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (sliderRef) {
      sliderRef.goTo(activeImage);
    }
  }, [activeImage, sliderRef]);

  return (
    <div className="bg-white">
      <h1 className="container mx-auto my-5 pt-5 text-2xl font-bold">
        Mersedes-Benz GLE {id}
      </h1>

      <RentalSlider
        images={[1, 2, 3, 4, 5, 6, 7, 8]}
        setSliderRef={setSliderRef}
        setActiveImage={setActiveImage}
      />

      <RentalThumbnails
        images={[1, 2, 3, 4, 5, 6, 7, 8]}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
      />

      <div className="container mx-auto pb-5">
        <div className="flex gap-10 items-start justify-between mt-10">
          <div className="!w-1/2">
            <h6 className="text-slate-900 font-bold text-lg">Условия аренды</h6>
            <div className="flex items-center gap-10 mt-3">
              <div className="flex items-center gap-3">
                <div className="font-black bg-slate-900 text-white p-2 px-3 rounded-lg">
                  23
                </div>
                <div>
                  <p className="text-gray-500">Возраст</p>
                  <p className="text-slate-900 font-bold">от 23-х лет</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-black bg-slate-900 text-white p-2 px-4 rounded-lg">
                  3
                </div>
                <div>
                  <p className="text-gray-500">Водительский опыт</p>
                  <p className="text-slate-900 font-bold">от 3-х лет</p>
                </div>
              </div>
            </div>

            <h5 className="text-2xl font-bold mt-7 mb-4">Стоимость аренды</h5>
            <div className="p-5 bg-[#f6f9fc] rounded-xl w-4/5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-500">1 сутки</p>
                <p className="font-semibold">250 сом./сут.</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">1-2 суток</p>
                <p className="font-semibold">200 сом./сут.</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">7-14 суток</p>
                <p className="font-semibold">130 сом./сут.</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">15-29 суток</p>
                <p className="font-semibold">95 сом./сут.</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">30+ суток</p>
                <p className="font-semibold">80 сом./сут.</p>
              </div>
            </div>

            <h5 className="text-2xl font-bold mt-7 mb-4">
              Характеристики и комплектация
            </h5>

            <RentalTab className="w-4/5" />
          </div>
          <div className="!w-1/2 flex justify-center">
            <div className="w-4/5">
              <div className="flex items-center justify-between">
                <h6 className="text-xl font-bold">Период аренды</h6>
                <p className="font-medium">Кол-во дней: {days}</p>
              </div>

              <RentalDatePicker
                setDays={setDays}
                className="grid grid-cols-2 gap-4 mt-4"
              />

              <div className="mt-5 rounded-xl bg-[#f6f9fc]">
                <p className="text-center bg-gray-500 text-white font-bold py-4 rounded-t-xl">
                  Войдите в аккаунт, чтобы видеть статус
                </p>
                <div className="px-4 py-5 flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 font-medium">Цена за сутки</p>
                    <p className="font-semibold">250 сом. в день</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 font-medium">Залог</p>
                    <p className="font-semibold">от 1000 сом.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 font-medium">Пробег</p>
                    <p className="font-semibold">
                      200 км/сут включено в стоимость
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 font-medium">
                      Перепробег за 1 км
                    </p>
                    <p className="font-semibold">20 сом./км.</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-slate-900 font-bold text-lg">
                      Итоговая стоимость
                    </p>
                    <p className="text-slate-900 font-bold text-[48px]">
                      250 сом.
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <Button
                    size="large"
                    type="primary"
                    className="h-[50px] font-semibold"
                    block
                  >
                    Оставить заявку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RentalAdvantages title="Наши преимущества" className="my-10" />

        <RentalInterestings
          className="my-10"
          items={[1, 2, 3, 4]}
          title="Возможно, вам будут интересны эти автомобили:"
        />

        <RentalFAQ />
      </div>
    </div>
  );
};

export default RentalPage;
