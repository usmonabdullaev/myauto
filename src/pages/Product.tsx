import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Card, Carousel, InputNumber } from "antd";
import { CarouselRef } from "antd/es/carousel/index";
import Slider from "react-slick";

import { getSimilar, getSingleData } from "../service/slices/data.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import { formatDate, formatNumber, truncate } from "../service/functions.ts";
import { MainSliderSkeleton } from "../components/Skeletons.tsx";

const Product = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { similar, similarLoading, singleData } = useAppSelector(
    (state) => state.data
  );
  const [activeSlider, setActiveSlider] = useState(0);
  const sliderRef = useRef<CarouselRef>(null);
  const [selectedOption, setSelectedOption] = useState("1");
  const [firstPrice, setFirstPrice] = useState(30000);
  const [showAllCharacteristics, setShowAllCharacteristics] = useState(false);
  const [slider2, setSlider2] = useState<any>(null);

  useEffect(() => {
    if (id) {
      dispatch(getSingleData(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (singleData) {
      dispatch(getSimilar({ limit: 5, price: singleData.price }));
    }
  }, [dispatch, singleData]);

  const selectOptions = [
    {
      label: "12 мес",
      id: "1",
    },
    {
      label: "24 мес",
      id: "2",
    },
    {
      label: "36 мес",
      id: "3",
    },
    {
      label: "48 мес",
      id: "4",
    },
    {
      label: "60 мес",
      id: "5",
    },
    {
      label: "72 мес",
      id: "6",
    },
    {
      label: "84 мес",
      id: "7",
    },
  ];

  const characteristics: {
    label: string;
    slug: string;
    type: "number" | "string" | "bool" | "obj";
  }[] = [
    {
      label: "Пробег",
      slug: "mileage",
      type: "number",
    },
    {
      label: "Обьём двигателя",
      slug: "engineCapacity",
      type: "number",
    },
    {
      label: "Коробка передач",
      slug: "transmission",
      type: "string",
    },
    {
      label: "Привод",
      slug: "driveUnit",
      type: "string",
    },
    {
      label: "Растаможен",
      slug: "saddened",
      type: "bool",
    },
    {
      label: "Цвет",
      slug: "color",
      type: "obj",
    },
    {
      label: "Тип топлива",
      slug: "fuelType",
      type: "string",
    },
    {
      label: "Газовое оборудование",
      slug: "gasEquipment",
      type: "bool",
    },
    {
      label: "Торг",
      slug: "bargain",
      type: "bool",
    },
    {
      label: "Обмен",
      slug: "exchange",
      type: "bool",
    },
  ];

  useEffect(() => {
    if (characteristics.length <= 6) {
      setShowAllCharacteristics(true);
    }
  }, [characteristics.length]);

  useEffect(() => {
    slider2?.slickGoTo?.(activeSlider);
  }, [activeSlider, slider2]);

  if (!singleData) {
    return null;
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div>
      <div className="container mx-auto mt-7 flex items-center justify-between">
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
                <Link to="/search" className="font-semibold">
                  Поиск авто
                </Link>
              ),
            },
            {
              title: (
                <Link to="/search" className="font-semibold">
                  {singleData.model}
                </Link>
              ),
            },
            {
              title: (
                <span className="font-semibold">
                  {singleData.title} {singleData.year} года
                </span>
              ),
            },
          ]}
        />
        <div className="flex items-center gap-4 text-[#77818d] text-sm">
          <p>
            Опубликовано: {formatDate(new Date(singleData.updated))}, г.
            {singleData.city}
          </p>
          <p>ID: {id}</p>
          <p className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#77818d"
              className="bi bi-eye-fill"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
            {singleData.views}
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="flex items-start justify-between w-100">
          <div className="w-[69%]">
            <div className="grid grid-cols-12 items-start justify-start">
              <div className="col-span-2 h-full max-h-[100%] overflow-hidden flex flex-col items-center gap-y-1 justify-between">
                <Slider {...settings} ref={setSlider2}>
                  {singleData.images.map((i, index) => (
                    <div key={i._id} className="relative">
                      {activeSlider === index && (
                        <div
                          className="absolute right-[100%] top-1/2"
                          style={{ transform: "translate(0, -50%)" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#008eff"
                            className="bi bi-caret-right-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                          </svg>
                        </div>
                      )}
                      <div
                        onClick={() => sliderRef.current?.goTo(index)}
                        className={`w-[86px] h-[86px] rounded-lg border-[#008eff] cursor-pointer ${
                          activeSlider === index ? "border-2" : ""
                        }`}
                        style={{
                          backgroundImage: `url(${i.imageUrl})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                        }}
                      ></div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-[89%] col-span-10 select-none">
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
                  {singleData.images.map((i) => (
                    <div key={i._id} className="h-[400px] w-full">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage: `url(${i.imageUrl})`,
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
            <div className="mt-10">
              <h3 className="text-[#0a192d] font-bold text-2xl">Описание</h3>
              <p className="mt-3 text-[#62676d] font-normal">
                {singleData.description}
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-[#0a192d] font-bold text-2xl">
                Средняя цена
              </h3>
              <div className="grid grid-rows-1 grid-cols-2 gap-x-[2px] mt-4">
                <div className="bg-white rounded-l-xl w-full p-4">
                  <p className="text-[#62676d] font-semibold">
                    Автомобиль{" "}
                    <span className="text-[#f2c112]">
                      продается по рыночной цене
                    </span>
                  </p>
                  <div className="mt-28 mb-20">
                    <div
                      className="h-2 rounded relative"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #1abb4e, #f2cc03, #ff8718)",
                      }}
                    >
                      <div
                        style={{ transform: "translate(-50%, -50%)" }}
                        className="absolute size-5 top-1/2 left-[45%] border-[6px] border-white rounded-[50%]"
                      >
                        <div
                          style={{
                            transform: "translate(-50%, -90%)",
                          }}
                          className="absolute left-1/2 -top-full w-[3px] h-4 bg-[#0a192dca]"
                        >
                          <div
                            style={{
                              transform: "translate(-20px, 0)",
                              backgroundImage: `url(${singleData.images[0].imageUrl})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              backgroundPosition: "center center",
                            }}
                            className="absolute bottom-full left-0 size-10 rounded"
                          >
                            <div
                              className="absolute top-1/2 left-full w-[200px]"
                              style={{ transform: "translate(10px, -50%)" }}
                            >
                              <p className="text-[#62676d] text-xs">Это авто</p>
                              <p className="text-[#0a192d] font-bold">
                                {formatNumber(singleData.price)} сом.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ transform: "translate(-50%, 0)" }}
                        className="absolute size-5 top-full left-1/2 w-[3px] h-4 bg-[#0a192dca]"
                      >
                        <p
                          className="w-[280px] absolute top-full left-1/2 text-[#62676d] mt-2"
                          style={{ transform: "translate(-50%, 0)" }}
                        >
                          Рыночная цена:{" "}
                          <span className="text-[#0a192d] font-semibold">
                            {formatNumber(188300)} сом.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-r-xl w-full p-4">
                  <p className="font-semibold text-[#0a192d]">
                    КАК СЧИТАЕТСЯ СРЕДНЯЯ ЦЕНА?
                  </p>
                  <p className="mt-2 text-[#62676d] text-sm">
                    В расчете средней цены автомобиля учитываются похожие
                    объявления со следующими параметрами:
                  </p>
                  <ul className="list-disc list-inside ml-1 text-[#62676d] mt-2 text-sm">
                    <li>марка, модель, год выпуска</li>
                    <li>тип двигателя</li>
                    <li>кузов</li>
                    <li>коробка передач</li>
                    <li>растаможено ли авто в РТ</li>
                  </ul>
                  <p className="text-[#62676d] mt-2 text-sm">
                    В расчет не включаются с завышенной и заниженной ценой.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-[#0a192d] font-bold text-2xl">
                Подбор автокредита
              </h3>
              <div className="grid grid-rows-1 grid-cols-2 gap-x-[2px] mt-4">
                <div className="bg-white rounded-l-xl w-full p-4">
                  <p className="text-sm font-semibold text-[#132435]">
                    СУММА КРЕДИТА
                  </p>
                  <div className="bg-[#edf1f4] rounded-xl w-full flexflex-col my-2">
                    <span className="w-full block bg-[#edf1f4] text-[#646464] p-2 pb-0 rounded-t-xl">
                      Стоимость автомобиля
                    </span>
                    <p className="text-xl text-[#565656] p-2 pt-0">
                      {formatNumber(singleData.price)} сом.
                    </p>
                  </div>
                  <div className="rounded-xl border-[1px] border-[#008eff] p-2 w-full flexflex-col">
                    <span className="w-full block text-[#646464] pb-2 rounded-t-xl">
                      Первоначальный взнос
                    </span>
                    <InputNumber
                      onChange={(e) => setFirstPrice(Number(e))}
                      formatter={(value) => `${formatNumber(Number(value))}`}
                      addonAfter="сом."
                      value={firstPrice}
                      min={0}
                      size="large"
                      max={Number.MAX_SAFE_INTEGER}
                      controls={false}
                      className="border-0 text-xl w-full text-[#565656] rounded-b-lg rounded-t-[0] focus:shadow-[none] opacity-[1] bg-[#ffffff] focus:shadow-[0]"
                    />
                  </div>
                  <p className="text-sm font-semibold mt-3 text-[#132435]">
                    СРОК КРЕДИТОВАНИЯ
                  </p>
                  <div className="flex items-center justify-start gap-1 mt-1 flex-wrap select-none">
                    {selectOptions.map((i) => (
                      <div
                        onClick={() => setSelectedOption(i.id)}
                        key={i.id}
                        className={`flex items-center justify-center bg-[#edf1f4] text-[#606872] px-4 py-2 rounded-md w-[24%] cursor-pointer ${
                          selectedOption === i.id
                            ? "!text-white bg-[#ff8718]"
                            : "bg-[#edf1f4]"
                        }`}
                      >
                        <p>{i.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-r-xl w-full p-4">
                  <p className="text-[#73828f] mt-5">
                    Сервис отправляет заявки в несколько банков и предоставляет
                    решение.
                  </p>
                  <p className="pb-0 text-[#73828f] mt-4">
                    Ежемесячный платеж*
                  </p>
                  <p className="text-xl font-bold text-[#00122a]">
                    3450 c./мес
                  </p>
                  <button className="text-white bg-[#ff8718] flex items-center justify-center w-full mt-4 rounded-md py-3 font-bold">
                    УЗНАТЬ РЕШЕНИЕ
                  </button>
                  <p className="text-[#73828f] text-sm mt-4">
                    *Расчет носит информационный характер и не является
                    обязательством сервиса Mycredit по предоставлению кредита на
                    указанных условиях.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%]">
            <div className="bg-white rounded-lg p-4">
              <p className="text-[#0a192d] font-semibold">
                {singleData.title} -{" "}
                <span className="text-[#62676d]">{singleData.year}</span>
              </p>
              <p className="font-bold text-2xl text-[#0a192d]">
                {formatNumber(singleData.price)} сом.
              </p>
              {!!singleData.credit && (
                <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                  В кредит от {singleData.credit} сом/мес
                </p>
              )}
              <div className="bg-[#07a8cb] text-white py-1 px-2 inline-block mt-4 rounded-lg font-normal">
                <p className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span>От владельца</span>
                </p>
              </div>
              <br />
              <p className="inline-block bg-[#f0f1f2] text-[#0a192d] rounded-lg py-1 px-2 mt-4">
                В наличии
              </p>
              <div className="flex items-center gap-3 mt-4">
                {!!singleData.credit && (
                  <p className="bg-[#ff8718] text-white w-full rounded-lg font-bold h-12 flex items-center justify-center cursor-pointer">
                    КУПИТЬ В КРЕДИТ
                  </p>
                )}
                <a
                  href={`tel:${singleData.authorPhone}`}
                  className="bg-[#008eff] text-white w-full rounded-lg font-bold h-12 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>ПОЗВОНИТЬ</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#fff"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-[#7d8288] font-semibold">ХАРАКТЕРИСТИКА</p>
              <div className="mt-3 font-semibold grid grid-cols-1 gap-y-2">
                {characteristics.map((i, index) => {
                  if (!showAllCharacteristics) {
                    if (index + 1 > 6) {
                      return null;
                    }
                  }

                  if (i.type === "obj") {
                    return (
                      <div key={i.slug} className="grid grid-cols-12">
                        <p className="text-[#62676d] col-span-8">Цвет:</p>
                        <p className="text-[#3c5069] col-span-4">
                          {singleData.characteristics.color.name}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <div key={i.slug} className="grid grid-cols-12">
                      <p className="text-[#62676d] col-span-8">{i.label}:</p>
                      <p className="text-[#3c5069] col-span-4">
                        {(i.type === "string" || i.type === "number") &&
                          singleData.characteristics[i.slug]}
                        {i.type === "bool"
                          ? singleData.characteristics[i.slug]
                            ? "Да"
                            : "Нет"
                          : null}{" "}
                        {i.slug === "mileage" && "км"}
                        {i.slug === "engineCapacity" && "л"}
                      </p>
                    </div>
                  );
                })}
              </div>
              {!showAllCharacteristics && (
                <div className="mt-4">
                  <hr className="mb-4" />
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setShowAllCharacteristics(true)}
                  >
                    <p className="text-[#62676d] font-semibold">
                      Полная характеристика
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#62676d"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-[#7d8288] font-semibold">АВТОР ОБЪЯВЛЕНИЯ</p>
              <div className="mt-4 grid grid-cols-1 gap-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#77818d"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <p className="text-[#0a192d]">
                      Пользователь {singleData.authorName}
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="#77818d"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#77818d"
                      className="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                      />
                    </svg>
                    <p className="text-[#0a192d] flex flex-col items-start">
                      <span className="text-xs text-[#77818d] font-semibold">
                        Номер телефона
                      </span>
                      <span className="font-semibold text-[#2d3744]">
                        {singleData.authorPhone}
                      </span>
                    </p>
                  </div>
                  {/* <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="#77818d"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
            <p className="mt-4 text-[#7d8288] text-sm">
              Вы можете{" "}
              <span className="text-[#008eff] cursor-pointer">
                пожаловаться на объявление,
              </span>{" "}
              если информация в объявлении не соответствует действительности.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12">
        <h3 className="font-bold text-xl">Похожие объявления</h3>
        {similarLoading ? (
          <MainSliderSkeleton limit={5} />
        ) : !similar.length ? (
          <p className="text-center text-xl font-medium">
            Нет похожих объявлений
          </p>
        ) : (
          <div className="mt-4 flex item-center gap-4 justify-between">
            {similar &&
              similar.map((i) => (
                <Link className="w-[19%]" to={`/product/${i._id}`} key={i._id}>
                  <Card
                    style={{ cursor: "pointer" }}
                    cover={
                      <div className="overflow-hidden rounded-t-lg relative">
                        {i.tarif === "premium" && (
                          <img
                            src="/premium.svg"
                            alt="Premium"
                            className="absolute z-10 -top-[0.4px] -left-[24.4px]"
                          />
                        )}
                        <div className="absolute z-10 right-4 top-4 bg-[#ffffff44] hover:bg-[#ffffff7d] rounded-lg flex items-center justify-center p-[2px]">
                          <img src="/heart.png" alt="Bookmark" />
                        </div>
                        <img
                          alt="Car"
                          src={i.images[0].imageUrl}
                          className="transition duration-300 hover:scale-110 h-[180px] w-full object-cover"
                          height={180}
                        />
                      </div>
                    }
                  >
                    <p className="text-lg font-bold flex items-center justify-between">
                      <span>{truncate(i.title, 13)}</span>
                      <span className="text-[#707070] text-sm">{i.year}</span>
                    </p>
                    <p className="text-xl font-bold">
                      {formatNumber(i.price)} сомони
                    </p>
                    <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                      {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                    </p>
                  </Card>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
