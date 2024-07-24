import { Card, Dropdown, Pagination } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { MainSliderSkeleton } from "../../components/Skeletons.tsx";
import { IMAGE_URL } from "../../service/env.tsx";
import { formatDate, formatNumber, truncate } from "../../service/functions.ts";
import { useAppDispatch, useAppSelector } from "../../service/hooks.ts";
import {
  getData,
  setGridType,
  setFilter,
} from "../../service/slices/dealer.ts";

const DealersCars = () => {
  const dispatch = useAppDispatch();
  const { data, dataLoading, metaData, gridType, filter } = useAppSelector(
    (state) => state.dealer
  );

  const onPageChange = (p: number) => {
    dispatch(setFilter({ ...filter, page: p }));
  };

  const onGridTypeChange = (v: "grid" | "line") => {
    dispatch(setGridType(v));
  };

  const sortByOptions: { key: "date" | "price"; label: string }[] = [
    {
      key: "date",
      label: "По дате",
    },
    {
      key: "price",
      label: "По цене",
    },
  ];

  useEffect(() => {
    dispatch(getData(filter));
  }, [dispatch, filter]);

  return (
    <div className="container mx-auto">
      <div className="container mx-auto mt-14">
        <h1 className="text-3xl font-bold text-[#0a192d]">
          Купите автомобиль у проверенных дилеров
        </h1>
      </div>

      <div className="flex items-center gap-6 mt-5">
        <div className="flex items-center gap-2">
          <p>{metaData.total_items || 0} объявлений</p>
          <div className="flex items-center gap-1 cursor-pointer">
            <Dropdown
              menu={{
                items: sortByOptions.map((i) => ({
                  key: i.key,
                  label: (
                    <span
                      className={`font-semibold ${
                        filter.sortBy === i.key
                          ? "font-bold text-[#3ca7fd]"
                          : ""
                      }`}
                      onClick={() =>
                        dispatch(
                          setFilter({
                            ...filter,
                            sortBy: i.key,
                          })
                        )
                      }
                    >
                      {i.label}
                    </span>
                  ),
                })),
              }}
              trigger={["click"]}
              placement="bottomRight"
              disabled={dataLoading}
            >
              <p className="text-[#3ca7fd] flex items-center gap-1 font-normal">
                {sortByOptions.find((i) => i.key === filter.sortBy)?.label ||
                  "По дате"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#3ca7fd"
                  className="bi bi-filter-left"
                  viewBox="0 0 16 16"
                  style={{ transform: "translateY(2px)" }}
                >
                  <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                </svg>
              </p>
            </Dropdown>
          </div>
        </div>
        <div className="flex items-center justify-center border-2 rounded-xl overflow-hidden h-[46px]">
          <div
            className={`flex items-center justify-center w-1/2 p-3 px-5  hover:bg-[#cde5f9] cursor-pointer h-full ${
              gridType === "grid" ? "bg-[#cde5f9]" : ""
            }`}
            title="Колонки"
            onClick={() => onGridTypeChange("grid")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={gridType === "grid" ? "#3ca7fd" : "#b1bbc6"}
              className="bi bi-grid-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
            </svg>
          </div>
          <div
            className={`flex items-center justify-center w-1/2 p-3 px-5 cursor-pointer hover:bg-[#cde5f9] h-full ${
              gridType === "line" ? "bg-[#cde5f9]" : ""
            }`}
            title="Таблицы"
            onClick={() => onGridTypeChange("line")}
          >
            <div className="flex flex-col gap-[2px]">
              <div
                className={`w-[14px] h-[6px]  rounded-[1px] ${
                  gridType === "line" ? "bg-[#3ca7fd]" : "bg-[#b1bbc6]"
                }`}
              ></div>
              <div
                className={`w-[14px] h-[6px] rounded-[1px] ${
                  gridType === "line" ? "bg-[#3ca7fd]" : "bg-[#b1bbc6]"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div>
          {dataLoading ? (
            <MainSliderSkeleton
              limit={8}
              className="flex flex-wrap"
              itemWidth="w-[24%]"
            />
          ) : !data.length ? (
            <p className="text-center text-xl">Товары не найден</p>
          ) : gridType === "grid" ? (
            <div className="flex flex-wrap justify-start gap-x-3 gap-y-6">
              {data &&
                data.map((i) => (
                  <Link
                    key={i._id}
                    to={`/dealers/car/${i._id}`}
                    className="w-[24%]"
                  >
                    <Card
                      style={{ cursor: "pointer" }}
                      cover={
                        <div className="overflow-hidden rounded-t-lg relative">
                          <img
                            alt="Car"
                            src={`${IMAGE_URL}${i.images[0].image}`}
                            className="transition duration-300 hover:scale-110 w-full h-[180px] object-cover"
                            height={180}
                          />
                        </div>
                      }
                    >
                      <p className="text-lg font-bold flex items-center justify-between">
                        <span title={i.title}>{truncate(i.title, 15)}</span>
                        <span className="text-[#707070] text-md">{i.year}</span>
                      </p>
                      <p className="text-xl font-bold">
                        {formatNumber(i.price)} сомони
                      </p>
                      <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                        {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                      </p>
                      <div className="font-semibold text-[#707070] flex flex-wrap gap-x-4 mt-2">
                        <p>Кроссовер</p>
                        <p>{i.characteristics.driveUnit}</p>
                        <p>{i.characteristics.transmission}</p>
                        <p>{i.characteristics.fuelType}</p>
                        <p>{i.characteristics.engineCapacity} л</p>
                        <p>{formatNumber(i.characteristics.mileage)} км</p>
                      </div>
                      <hr className="mt-5" />
                      <div className="mt-3 flex items-center justify-between">
                        <p className="font-bold text-[#707070]">
                          {formatDate(new Date(i.updated)).split(" ")[0]} •{" "}
                          {i.city}
                        </p>
                        <p className="text-[#707070] flex items-center gap-1 font-bold">
                          {i.views}{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#707070"
                            className="bi bi-eye-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                          </svg>
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="flex flex-col justify-start gap-y-5">
              {data &&
                data.map((i) => (
                  <Link
                    key={i._id}
                    to={`/dealers/car/${i._id}`}
                    className="w-full"
                  >
                    <div className="cursor-pointer bg-white rounded-l-lg grid grid-cols-3 w-full h-[200px] overflow-hidden">
                      <div className="overflow-hidden rounded-l-lg relative w-full h-full col-span-1">
                        <img
                          alt="Car"
                          src={`${IMAGE_URL}${i.images[0].image}`}
                          className="transition duration-300 hover:scale-110 h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4 col-span-2">
                        <p className="text-lg font-bold flex items-center justify-between">
                          <span title={i.title}>{truncate(i.title, 15)}</span>
                          <span className="text-[#707070] text-md">
                            {i.year}
                          </span>
                        </p>
                        <p className="text-xl font-bold">
                          {formatNumber(i.price)} сомони
                        </p>
                        <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                          {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                        </p>
                        <div className="font-semibold text-[#707070] flex flex-wrap gap-x-4 mt-2">
                          <p>Кроссовер</p>
                          <p>{i.characteristics.driveUnit}</p>
                          <p>{i.characteristics.transmission}</p>
                          <p>Бензиновый</p>
                          <p>{i.characteristics.engineCapacity} л</p>
                          <p>{formatNumber(i.characteristics.mileage)} км</p>
                        </div>
                        <hr className="mt-5" />
                        <div className="mt-3 flex items-center justify-between">
                          <p className="font-bold text-[#707070]">
                            Вчера • {i.city}
                          </p>
                          <p className="text-[#707070] flex items-center gap-1 font-bold">
                            {i.views}{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#707070"
                              className="bi bi-eye-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
        <div className="mt-7 flex justify-end">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={1}
            total={metaData.total_pages}
            showSizeChanger={false}
            onChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DealersCars;
