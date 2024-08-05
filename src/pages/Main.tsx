import React, { useEffect, useState } from "react";
import { InputNumber, QRCode } from "antd";

import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import {
  getPremiumData,
  getSearchCar,
  getNewCars,
  getElectCars,
} from "../service/slices/data.ts";
import { formatNumber } from "../service/functions.ts";

import "swiper/css";
import { CarGroups } from "../components/CarGroups.tsx";
import { SearchBar } from "../components/SearchBar.tsx";
import { BrandsList } from "../components/BrandsList.tsx";

const Main = () => {
  const dispatch = useAppDispatch();
  const {
    premiumData,
    premiumDataLoading,
    searchCar,
    searchCarLoading,
    newData,
    newDataLoading,
    electData,
    electDataLoading,
  } = useAppSelector((state) => state.data);
  const [selectedOption, setSelectedOption] = useState("1");
  const [carPrice, setCarPrice] = useState(120000);
  const [firstPrice, setFirstPrice] = useState(20000);

  useEffect(() => {
    dispatch(getPremiumData());
    dispatch(getSearchCar("Душанбе"));
    dispatch(getNewCars());
    dispatch(getElectCars());
  }, [dispatch]);

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

  return (
    <div>
      <div className="container mx-auto mt-10">
        <div
          className="p-10 rounded-[20px]"
          style={{
            backgroundImage: "url(/banner-1.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-white text-4xl font-bold leading-[1.4]">
            Надежный сервис по покупке,
            <br />
            продаже и обслуживанию авто
          </h2>
          <div className="flex items-center gap-5 mt-10">
            <div className="w-[220px] h-[130px] backdrop-blur-xl border-[#008eff] hover:border-2 rounded-[20px] bg-[#ffffff1f] p-4 text-white flex flex-col items-start justify-between transition hover:scale-105">
              <img src="/car-check-blue.png" alt="Car" />
              <div>
                <h5 className="font-bold">Найти авто</h5>
                <p className="font-semibold">из тысячи вариантов</p>
              </div>
            </div>
            <div className="w-[220px] h-[130px] backdrop-blur-xl border-[#80d119] hover:border-2 rounded-[20px] bg-[#ffffff1f] p-4 text-white flex flex-col items-start justify-between transition hover:scale-105">
              <img src="/automotive.png" alt="Car" />
              <div>
                <h5 className="font-bold">Продать авто</h5>
                <p className="font-semibold">выгодно и удобно</p>
              </div>
            </div>
            <div className="w-[220px] h-[130px] backdrop-blur-xl border-[#ff522d] hover:border-2 rounded-[20px] bg-[#ffffff1f] p-4 text-white flex flex-col items-start justify-between transition hover:scale-105">
              <img src="/car-wash.png" alt="Car" />
              <div>
                <h5 className="font-bold">Проверить</h5>
                <p className="font-semibold">штрафы</p>
              </div>
            </div>
            <div className="w-[220px] h-[130px] backdrop-blur-xl border-[#ff8718] hover:border-2 rounded-[20px] bg-[#ffffff1f] p-4 text-white flex flex-col items-start justify-between transition hover:scale-105">
              <img src="/discount.png" alt="Car" />
              <div>
                <h5 className="font-bold">Автокредит</h5>
                <p className="font-semibold">от наших партнеров</p>
              </div>
            </div>
            <div className="w-[220px] h-[130px] backdrop-blur-xl border-[#b0dc00] hover:border-2 rounded-[20px] bg-[#ffffff1f] p-4 text-white flex flex-col items-start justify-between transition hover:scale-105">
              <img src="/protection.png" alt="Car" />
              <div>
                <h5 className="font-bold">Страхование</h5>
                <p className="font-semibold">от наших партнеров</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearchBar className="container mx-auto mt-10" />

      <CarGroups
        className="container mx-auto mt-12"
        items={premiumData}
        loading={premiumDataLoading}
        title="Премиум объявление"
      />

      <CarGroups
        className="container mx-auto mt-12"
        items={searchCar}
        loading={searchCarLoading}
        title="Ищу авто"
      />

      <CarGroups
        className="container mx-auto mt-12"
        items={newData}
        loading={newDataLoading}
        title="Новые объявления"
      />

      <CarGroups
        className="container mx-auto mt-12"
        items={electData}
        loading={electDataLoading}
        title="Электромобили"
      />

      <div className="container mx-auto mt-12">
        <div className="h-[290px] flex items-center justify-between">
          <div
            className="h-full w-[48%] flex flex-col items-start shadow-lg justify-between rounded-xl bg-[#ffdf00]"
            style={{
              backgroundImage: "url(/banner-2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "contain",
            }}
          >
            <h4 className="text-black font-bold text-xl m-4">
              Самые выгодные
              <br />
              автокредиты в банках
              <br />
              Таджикистана
            </h4>
            <button className="m-4 bg-white px-8 font-medium py-2 rounded-xl">
              Сравнить
            </button>
          </div>
          <div
            className="h-full w-[48%] rounded-xl bg-[#006cbc] flex flex-col items-start shadow-lg justify-between"
            style={{
              backgroundImage: "url(/banner-3.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "contain",
            }}
          >
            <div className="m-4">
              <h4 className="text-2xl text-white font-bold">Автострахование</h4>
              <p className="text-white mt-1">
                Поможем выбрать лучшую
                <br />
                страховку онлайн!
              </p>
            </div>
            <button className="m-4 bg-white px-8 font-medium py-2 rounded-xl text-[#006cbc]">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-[#e2e9f0] py-16">
        <div className="container mx-auto">
          <h3 className="text-xl font-bold">Подбор автокредита</h3>
          <div className="flex items-center justify-between gap-2 h-[320px] mt-2">
            <div className="w-[32%] h-full flex flex-col items-start justify-between">
              <div className="bg-white rounded-xl h-[48%] w-full relative">
                <div className="m-4">
                  <h5 className="font-bold text-lg text-[#132435]">
                    Кредитные предложения на выбор
                  </h5>
                  <p className="text-sm">Увеличиваем вероятность одобрения</p>
                </div>
                <img
                  src="/credit-1.png"
                  alt="Credit"
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="h-[48%] flex items-center justify-between">
                <div className="w-[48%] h-full bg-white rounded-xl relative">
                  <div className="m-4">
                    <h5 className="font-bold text-lg text-[#132435]">
                      Быстро и удобно
                    </h5>
                    <p className="text-xs">
                      Никаких бумаг, документы
                      <br />
                      подписываются онлайн
                    </p>
                  </div>
                  <img
                    src="/credit-2.png"
                    alt="Credit"
                    className="absolute bottom-0 right-0"
                  />
                </div>
                <div className="w-[48%] h-full bg-white rounded-xl relative">
                  <div className="m-4">
                    <h5 className="font-bold text-lg text-[#132435]">
                      Безопасность
                    </h5>
                    <p className="text-xs">
                      Надежные сервисы защиты персональных данных
                    </p>
                  </div>
                  <img
                    src="/credit-3.png"
                    alt="Credit"
                    className="absolute bottom-0 right-0"
                  />
                </div>
              </div>
            </div>
            <div className="w-[32%] h-full p-4 bg-white rounded-xl">
              <p className="text-sm font-medium text-[#132435]">
                СУММА КРЕДИТА
              </p>
              <label
                htmlFor="car-price"
                className="bg-[#edf1f4] rounded-xl w-full flexflex-col"
              >
                <span className="w-full block bg-[#edf1f4] text-[#646464] p-2 pb-0 rounded-t-xl">
                  Стоимость автомобиля
                </span>
                <InputNumber
                  id="car-price"
                  onChange={(e) => setCarPrice(Number(e))}
                  formatter={(value) => `${formatNumber(Number(value))}`}
                  value={carPrice}
                  min={0}
                  controls={false}
                  className="border-0 text-xl w-full mb-2 text-[#565656] rounded-b-xl focus:shadow-none bg-[#edf1f4] hover:bg-[#edf1f4] focus:shadow-[0] !focus:bg-[#edf1f4] rounded-[0]"
                />
              </label>
              <label
                htmlFor="first-price"
                className="bg-[#edf1f4] rounded-xl w-full flexflex-col"
              >
                <span className="w-full block bg-[#edf1f4] text-[#646464] p-2 pb-0 rounded-t-xl">
                  Первоначальный взнос
                </span>
                <InputNumber
                  id="first-price"
                  onChange={(e) => setFirstPrice(Number(e))}
                  formatter={(value) => `${formatNumber(Number(value))}`}
                  value={firstPrice}
                  controls={false}
                  min={0}
                  className="border-0 text-xl w-full text-[#565656] rounded-b-xl focus:shadow-none bg-[#edf1f4] hover:bg-[#edf1f4] !focus:bg-[#edf1f4] rounded-[0]"
                />
              </label>
              <p className="text-sm font-medium mt-3 text-[#132435]">
                СРОК КРЕДИТОВАНИЯ
              </p>
              <div className="flex items-center justify-start gap-1 mt-1 flex-wrap select-none">
                {selectOptions.map((i) => (
                  <div
                    onClick={() => setSelectedOption(i.id)}
                    key={i.id}
                    className={`flex items-center justify-center bg-[#edf1f4] px-4 py-2 rounded-md w-[24%] cursor-pointer ${
                      selectedOption === i.id
                        ? "text-white bg-[#f80]"
                        : "bg-[#edf1f4]"
                    }`}
                  >
                    <p>{i.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[32%] h-full p-4 bg-white rounded-xl">
              <h5 className="font-bold text-xl">
                <span className="text-[blue]">my</span>credit
              </h5>
              <p className="text-[#73828f] mt-2">
                Сервис отправляет заявки в несколько банков и предоставляет
                решение.
              </p>
              <p className="pb-0 text-[#73828f] mt-4">Ежемесячный платеж*</p>
              <p className="text-xl font-bold text-[#00122a]">2450 c./мес</p>
              <button className="text-white bg-[#f80] flex items-center justify-center w-full mt-4 rounded-md py-3 font-bold">
                ПОКАЗАТЬ АВТОМОБИЛИ
              </button>
              <p className="text-[#73828f] text-xs mt-4">
                *Расчет носит информационный характер и не является
                обязательством сервиса Mycredit по предоставлению кредита на
                указанных условиях.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12">
        <div
          className="bg-[#dbe2e9] h-80 rounded-xl py-16 flex items-center relative"
          style={{
            backgroundImage: "url(/banner-4.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
          }}
        >
          <div className="ml-10">
            <h3 className="text-[#1f2937] font-bold text-xl">
              В приложении удобнее
            </h3>
            <p className="max-w-[400px] text-[#808080] mt-2">
              Наведите камеру на QR-код, чтобы быстро установить приложение. Или
              нажмите на кнопки ниже.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <a href="/">
                <img src="/app-store.png" alt="App store" width={180} />
              </a>
              <a href="/">
                <img src="/google-play-1.png" alt="Google play" width={180} />
              </a>
            </div>
          </div>
          <div className="absolute right-[160px] top-1/2 -translate-y-1/2 bg-white">
            <QRCode
              type="svg"
              errorLevel="H"
              value="https://myauto-delta.vercel.app"
              icon="/qr-code.png"
            />
          </div>
        </div>
      </div>

      <BrandsList className="container mx-auto mt-10" />
    </div>
  );
};

export default Main;
