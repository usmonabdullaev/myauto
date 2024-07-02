import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BuyOnline = () => {
  return (
    <div>
      <div className="container mx-auto mt-7">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/" className="font-semibold">
                  Продажа автомолей
                </Link>
              ),
            },
            {
              title: <span className="font-semibold">Купить онлайн</span>,
            },
          ]}
        />
      </div>

      <div className="container mx-auto mt-6">
        <div className="flex items-start gap-3">
          <div className="w-[79%]">
            <div
              className="rounded-xl px-4 py-7"
              style={{
                backgroundImage: "linear-gradient(to bottom, #2539d7, #018eff)",
              }}
            >
              <h1 className="font-bold text-4xl text-white">
                Купить авто <span className="text-[#b0dc00]">онлайн</span>
              </h1>
              <p className="text-white text-lg font-semibold mt-4">
                Покупка автоиобиля онлайн представляет возможность быстро,
                удобно, безопасно и выгодно купить понравившуюся модель нового
                автомобиля с доставкой у онлайн-дилера Myauto.tj
              </p>
            </div>
            <div className="rounded-xl px-4 py-7 bg-white mt-6">
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
            <div className="rounded-xl bg-white px-4 py-7 mt-6">
              <h3 className="font-bold text-xl text-[#0a192d]">
                Выберите марку
              </h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="rounded-md"></div>
              </div>
              <h3 className="font-bold text-xl text-[#0a192d] mt-6">
                Выберите модель
              </h3>
              <div></div>
            </div>
          </div>
          <div>AA</div>
        </div>
      </div>
    </div>
  );
};

export default BuyOnline;
