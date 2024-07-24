/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge, Breadcrumb, Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel/index";
import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CheckOutlined, RightOutlined } from "@ant-design/icons";

import { IMAGE_URL } from "../service/env.tsx";
import { formatNumber } from "../service/functions.ts";
import { ButtonGradient } from "../components/UI/Buttons.tsx";

const BuyOnlineParams = () => {
  const params = useParams<{ brand: string; model: string }>();
  const [activeSlider, setActiveSlider] = useState(0);
  const [options, setOptions] = useState<{ id: number; value: string }>({
    id: 0,
    value: "Comfort",
  });
  const [color, setColor] = useState<{
    id: number;
    title: string;
    hex: string;
    reverseHex: string;
  }>({
    title: "White",
    hex: "#fff",
    id: 2,
    reverseHex: "#fe0",
  });
  const sliderRef = useRef<CarouselRef>(null);

  const OPTIONS = [
    { id: 0, value: "Comfort" },
    { id: 1, value: "Start" },
  ];

  return (
    <div>
      <div className="container mx-auto mt-7">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/" className="font-semibold">
                  Продажа автомобилей
                </Link>
              ),
            },
            {
              title: (
                <Link to="/buy-online" className="font-semibold">
                  Купить онлайн
                </Link>
              ),
            },
            {
              title: <span className="font-semibold">Hyundai Elantra</span>,
            },
          ]}
        />
      </div>

      <div className="container mx-auto mt-4">
        <div className="flex items-start justify-between w-100">
          <div className="w-[64%]">
            <div className="grid grid-cols-12 items-start justify-start">
              <div className="w-full col-span-12 select-none">
                <Carousel
                  ref={sliderRef}
                  className="border-2 hidden"
                  afterChange={setActiveSlider}
                  nextArrow={
                    <div>
                      <button className="bg-[#5a5a5a94] rounded-md -ml-5 size-10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#fff"
                          className="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </button>
                    </div>
                  }
                  prevArrow={
                    <div>
                      <button className="bg-[#5a5a5a94] rounded-md -mr-5 size-10 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="#fff"
                          className="bi bi-chevron-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                          />
                        </svg>
                      </button>
                    </div>
                  }
                  rootClassName="custom-slider"
                  infinite={false}
                  dots={false}
                  draggable
                  arrows
                >
                  {{
                    images: [
                      {
                        id: 1,
                        image:
                          "/uploads/image/6214016e-aa06-43d1-a29b-616129438715_1721110592721.png",
                      },
                      {
                        id: 1,
                        image:
                          "/uploads/image/5948ab79-3af9-4a91-bc32-ab2780ff0ba7_1721110592723.png",
                      },
                    ],
                  }.images.map((i) => (
                    <div key={i.id} className="h-[400px] w-full">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `url(${IMAGE_URL}${i.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                        }}
                      ></div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="rounded-xl px-4 py-7 bg-white mt-10">
              <h3 className="font-bold text-xl text-[#0a192d]">
                Преимущества покупки онлайн
              </h3>
              <div className="grid grid-cols-4 gap-4 mt-3">
                <div className="flex flex-col justify-between">
                  <img src="/online-1.png" alt="Online" className="w-4/5" />
                  <p className="text-[#585858]">Скидка до 3% на покупку авто</p>
                </div>
                <div className="flex flex-col justify-between">
                  <img src="/online-2.png" alt="Online" className="w-4/5" />
                  <p className="text-[#585858]">
                    Проведем тест-драйв для пробной поездки
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <img src="/online-3.png" alt="Online" className="w-4/5" />
                  <p className="text-[#585858]">
                    Проведем тест-драйв для пробной поездки
                  </p>
                </div>
                <div className="flex flex-col justify-between">
                  <img src="/online-4.png" alt="Online" className="w-4/5" />
                  <p className="text-[#585858]">
                    Проведем тест-драйв для пробной поездки
                  </p>
                </div>
              </div>
            </div>

            <h3 className="mt-8 font-bold text-xl text-[#1f2937]">
              Обзор автомобиля
            </h3>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div
                className="p-4 rounded-xl relative"
                style={{
                  backgroundImage: "url(/online-car-1.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Badge count={"Экстерьер"} color="#2539d7" />
                <p className="text-white text-2xl font-bold mt-2">
                  Новый взгляд со стороны
                </p>
                <div className="absolute right-7 bottom-6 bg-white rounded-[50%] size-12 flex items-center justify-center cursor-pointer">
                  <RightOutlined />
                </div>
              </div>
              <div
                className="p-4 rounded-xl relative"
                style={{
                  backgroundImage: "url(/online-car-2.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Badge count={"Интерьер"} color="#2539d7" />
                <p className="text-white text-2xl font-bold mt-2">
                  Новый технологичный дизайн интерьера
                </p>
                <div className="absolute right-7 bottom-6 bg-white rounded-[50%] size-12 flex items-center justify-center cursor-pointer">
                  <RightOutlined />
                </div>
              </div>
              <div
                className="p-4 rounded-xl h-[250px] relative"
                style={{
                  backgroundImage: "url(/online-car-3.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Badge count={"Безопасность"} color="#2539d7" />
                <p className="text-white text-2xl font-bold mt-2">
                  Новые технологии безопасности
                </p>
                <div className="absolute right-7 bottom-6 bg-white rounded-[50%] size-12 flex items-center justify-center cursor-pointer">
                  <RightOutlined />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[34%]">
            <div className="bg-white rounded-lg p-4">
              <p className="text-[#0a192d] font-semibold">Hyundai Elantra</p>
              <p className="font-bold text-2xl text-[#0a192d]">
                от {formatNumber(540000)} сом.
              </p>
              <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                В кредит от 1000 сом/мес
              </p>
            </div>
            <h3 className="mt-4 font-bold text-xl text-[#1f2937]">
              Комплектации
            </h3>
            {OPTIONS.map((i) => (
              <div
                key={i.id}
                onClick={() => setOptions(i)}
                className={`bg-white rounded-lg p-4 mb-3 cursor-pointer border-2 ${
                  options.id === i.id ? "border-[#008eff]" : "border-white"
                }`}
              >
                <p className="text-[#0a192d] font-normal flex items-center justify-between">
                  <span>{i.value}</span>
                  {i.id === options.id && (
                    <CheckOutlined className="text-[#008eff]" />
                  )}
                </p>
                <p className="text-md text-[#626d7c]">
                  1.6 л • 127.5 л. с.• Передний • Автомат
                </p>
                <p className="font-semibold text-lg text-[#0a192d] mb-3">
                  {formatNumber(480000)} сом.
                </p>
                <p className="text-[#ff8718] bg-[#ffeddd] inline font-bold h-[22px] rounded-xl px-4 py-1">
                  В кредит от 3400 сом/мес
                </p>
              </div>
            ))}
            <h3 className="mt-4 font-bold text-xl text-[#1f2937]">
              Выберите цвет кузова
            </h3>
            <p className="mt-3">{color.title}</p>
            <div className="flex flex-wrap items-center gap-3 my-2">
              {[
                {
                  title: "Red",
                  hex: "red",
                  id: 3,
                  reverseHex: "#fff",
                },
                {
                  title: "White",
                  hex: "#fff",
                  id: 2,
                  reverseHex: "#fe0",
                },
                {
                  title: "Green",
                  hex: "green",
                  id: 4,
                  reverseHex: "#ffddbc",
                },
              ].map((i) => (
                <div
                  key={i.id}
                  onClick={() => setColor(i)}
                  className={`rounded-[50%] size-12 cursor-pointer flex items-center justify-center ${
                    i.id === color.id ? "border-2 border-[#008eff]" : ""
                  }`}
                  style={{
                    backgroundColor: i.hex,
                  }}
                >
                  {color.id === i.id && (
                    <CheckOutlined style={{ color: i.reverseHex }} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-[#2f3844] rounded-lg bg-[#e3e7ec] inline px-2 py-1">
              Наличие цвета зависит от комплектации
            </p>
            <h3 className="mt-4 font-bold text-xl text-[#1f2937]">Стоимость</h3>
            <div className={`bg-white rounded-lg p-4 mt-1`}>
              <p className="text-[#0a192d] font-normal flex items-center justify-between border-b pb-3">
                <span className="text-[#808080]">Комлектация</span>
                <span>{options.value}</span>
              </p>
              <p className="text-[#0a192d] font-normal flex items-center justify-between border-b py-3">
                <span className="text-[#808080]">Цвет кузова</span>
                <span>{color.title}</span>
              </p>
              <p className="text-[#0a192d] font-normal flex items-center justify-between border-b py-3">
                <span className="text-[#808080]">Стоимость без скидки</span>
                <span>{formatNumber(490000)} сом.</span>
              </p>
              <p className="text-[#0a192d] flex items-center justify-between pt-3 pb-1">
                <span className="font-bold text-xl">Итого</span>
                <span className="font-bold text-xl">
                  {formatNumber(440000)} сом.
                </span>
              </p>
              <p className="text-[#ff8718] font-bold flex items-center justify-between mb-7">
                <span>В кредит</span>
                <span>от 3600 с./мес</span>
              </p>
              <ButtonGradient group="1" className="font-bold mb-2">
                КУПИТЬ СЕЙЧАС
              </ButtonGradient>
              <ButtonGradient group="2" className="font-bold">
                РАССЧИТАТЬ В КРЕДИТ
              </ButtonGradient>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOnlineParams;
