import { Breadcrumb, Card, Tabs, TabsProps } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { getComparisonData } from "../service/slices/data.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import { formatNumber, truncate } from "../service/functions.ts";

const CarComparison = () => {
  const dispatch = useAppDispatch();
  const { comparisonData } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getComparisonData());
  }, [dispatch]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span className="font-semibold">ОБЩАЯ ИНФОРМАЦИЯ</span>,
      children: (
        <div className="font-semibold ">
          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">Год</p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  2024
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">Пробег</p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  {formatNumber(160000)}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">
              Тип двигателя
            </p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  Автомат
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">
              Объем двигателя
            </p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  1.6
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">
              Мощность двигателя
            </p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  123 л.с.
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">Привод</p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  Передний
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">Тип КПП</p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  Седан
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="bg-[#e4e9ef] py-2 px-4 text-[#707070]">Цвет</p>
            <div
              className="grid gap-x-4 py-3 px-4"
              style={{
                gridTemplateColumns: `repeat(${
                  comparisonData?.length || 1
                }, minmax(0, 1fr))`,
              }}
            >
              {comparisonData?.map((i) => (
                <p key={i._id} className="text-[#0a192d]">
                  Серебристый
                </p>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: <span className="font-semibold">ОПЦИИ</span>,
      children: "Options 2",
    },
  ];

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
              title: <Link to="/search">Поиск авто</Link>,
            },
            {
              title: <span className="font-semibold">Сравнение авто</span>,
            },
          ]}
        />
      </div>

      <div className="container mx-auto mt-14 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#0a192d]">Сравнение авто</h1>
        <div className="flex items-center gap-2 font-bold text-[#77818d]">
          <p className="bg-[#dbe2e9] rounded-lg px-5 py-3 cursor-pointer transition hover:text-[#0a192d]">
            ЗАКРЫТЬ СРАВНЕНИЕ
          </p>
          <p className="bg-[#dbe2e9] rounded-lg px-5 py-3 cursor-pointer transition hover:text-[#0a192d]">
            ОЧИСТИТЬ И ЗАКРЫТЬ
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <div
          className="mt-4 grid gap-x-4"
          style={{
            gridTemplateColumns: `repeat(${
              comparisonData?.length || 1
            }, minmax(0, 1fr))`,
          }}
        >
          {comparisonData &&
            comparisonData.map((i) => (
              <Card
                key={i._id}
                style={{
                  cursor: "pointer",
                  background: "none",
                }}
                cover={
                  <div className="overflow-hidden h-[240px] rounded-t-lg relative">
                    <div className="absolute size-10 z-10 right-4 top-4 bg-[#ffffff44] hover:bg-[#ffffff7d] rounded-lg flex items-center justify-center p-[2px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#fff"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                      </svg>
                    </div>
                    <img
                      alt="Car"
                      src="/car.webp"
                      className="transition duration-300 hover:scale-110 w-full h-full"
                      style={{ objectPosition: "center", objectFit: "cover" }}
                    />
                  </div>
                }
              >
                <p className="text-lg font-bold flex items-center justify-between">
                  <span title="Mercedes-Benz12345rtefes">
                    {truncate("Mercedes-Benz12345rtefes", 18)}
                  </span>
                  <span className="text-[#707070] text-sm">2025</span>
                </p>
                <p className="text-xl font-bold">
                  {formatNumber(Number(1000000))} сомони
                </p>
                <p className="text-[#ff8718] mt-1 font-bold">
                  В кредит от 3500 сом/мес
                </p>
              </Card>
            ))}
        </div>
        <div className="mb-10">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

export default CarComparison;