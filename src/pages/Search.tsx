import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Card,
  Checkbox,
  Dropdown,
  Pagination,
  Select,
  Switch,
} from "antd";
import { Link } from "react-router-dom";

import { MainSliderSkeleton } from "../components/Skeletons.tsx";
import { formatNumber, truncate } from "../service/functions.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import {
  getFilteredData,
  setFilterQueries,
  setGridType,
} from "../service/slices/data.ts";
import SelectLabel from "../components/SelectLabel.tsx";
import DebouncedInput from "../components/DebouncedInput.tsx";

const Search = () => {
  const {
    filteredDataLoading,
    filteredData,
    metaQuery,
    filterQueries,
    gridType,
  } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const [showAllColors, setShowAllColors] = useState(false);

  const onPageChange = (p: number) => {
    dispatch(setFilterQueries({ ...filterQueries, page: p }));
  };

  useEffect(() => {
    dispatch(getFilteredData({ page: filterQueries.page }));
  }, [dispatch, filterQueries]);

  const onGridTypeChange = (value: "grid" | "line") => {
    dispatch(setGridType(value));
  };

  const colorsOptions = [
    {
      label: "Белый",
      hex: "white",
      id: 1,
    },
    {
      label: "Серебристый",
      hex: "#c0c0c0",
      id: 2,
    },
    {
      label: "Черный",
      hex: "black",
      id: 3,
    },
    {
      label: "Черный",
      hex: "black",
      id: 4,
    },
    {
      label: "Черный",
      hex: "black",
      id: 5,
    },
    {
      label: "Черный",
      hex: "black",
      id: 6,
    },
    {
      label: "Черный",
      hex: "black",
      id: 7,
    },
    {
      label: "Черный",
      hex: "black",
      id: 8,
    },
  ];

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

  const cityOptions = [
    {
      value: "dushanbe",
      label: "Душанбе",
      id: 1,
    },
    { value: "khorog", label: "Хорог", id: 2 },
    {
      value: "khudjand",
      label: "Худжанд",
      id: 3,
    },
  ];

  const modelOptions = [
    { value: "bmw", label: "BMW" },
    {
      value: "mers",
      label: "Mersedes-Benz",
    },
    {
      value: "ferrari",
      label: "Ferrari",
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
              title: <span className="font-semibold">Купить автомобиль</span>,
            },
          ]}
        />
      </div>

      <div className="container mx-auto mt-14">
        <h1 className="text-3xl font-bold text-[#0a192d]">
          Найдено {formatNumber(metaQuery.total_items || 0)} объявлений
        </h1>
      </div>

      <div className="container mx-auto mt-8">
        <div className="flex items-start justify-between w-100">
          <div className="w-[29%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p>Сортироват</p>
                <div className="flex items-center gap-1 cursor-pointer">
                  <Dropdown
                    menu={{
                      items: sortByOptions.map((i) => ({
                        key: i.key,
                        label: (
                          <span
                            className={`font-semibold ${
                              filterQueries.sortBy === i.key
                                ? "font-bold text-[#3ca7fd]"
                                : ""
                            }`}
                            onClick={() =>
                              dispatch(
                                setFilterQueries({
                                  ...filterQueries,
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
                  >
                    <p className="text-[#3ca7fd] flex items-center gap-1 font-normal">
                      {sortByOptions.find((i) => i.key === filterQueries.sortBy)
                        ?.label || "По дате"}
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
            <h2 className="font-bold text-xl text-[#0a192d] mt-4">Фильтры</h2>
            <div className="mt-5">
              <Select
                placeholder="Выберите город"
                onChange={(city) =>
                  dispatch(
                    setFilterQueries({
                      ...filterQueries,
                      city,
                    })
                  )
                }
                className="custom-select font-semibold w-full h-12 placeholder:text-[#3f4e60]"
                options={cityOptions.map((i) => ({
                  value: i.value,
                  label: <SelectLabel>{i.label}</SelectLabel>,
                }))}
                variant="filled"
                defaultValue={filterQueries.city || undefined}
              />
              <Select
                placeholder="Марка и модель"
                onChange={(model) =>
                  dispatch(setFilterQueries({ ...filterQueries, model }))
                }
                className="custom-select font-semibold w-full h-12 mt-2"
                options={modelOptions.map((i) => ({
                  value: i.value,
                  label: <SelectLabel>{i.label}</SelectLabel>,
                }))}
                variant="filled"
                defaultValue={filterQueries.model || undefined}
              />
              <div className="mt-2">
                <DebouncedInput
                  placeholder="Цена, От"
                  variant="filled"
                  min={0}
                  max={filterQueries.maxPrice}
                  className="font-semibold w-full h-12 mb-[1px] p-2"
                  onChange={(min) => {
                    dispatch(
                      setFilterQueries({
                        ...filterQueries,
                        minPrice: min || undefined,
                      })
                    );
                  }}
                  value={filterQueries.minPrice}
                />
                <DebouncedInput
                  placeholder="Цена, До"
                  variant="filled"
                  min={filterQueries.minPrice}
                  className="font-semibold w-full h-12 mb-[1px] p-2"
                  onChange={(max) =>
                    dispatch(
                      setFilterQueries({
                        ...filterQueries,
                        maxPrice: max || undefined,
                      })
                    )
                  }
                  value={filterQueries.maxPrice}
                />
              </div>
              <div className="mt-2 bg-[#e8eaee] rounded-md h-12 px-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={26}
                    height={26}
                    fill="#adb7c3"
                  >
                    <path d="M22.41,10.59,20.36,8.54V5.63a2,2,0,0,0-2-2H15.46l-2.05-2a2,2,0,0,0-2.82,0L8.54,3.64H5.63a2,2,0,0,0-2,2V8.54l-2,2.05A2,2,0,0,0,1,12a2,2,0,0,0,.58,1.41l2.06,2.05v2.91a2,2,0,0,0,2,2H8.54l2.05,2.05A2,2,0,0,0,12,23a2,2,0,0,0,1.41-.58l2.05-2.06h2.91a2,2,0,0,0,2-2V15.46l2.05-2.05a2,2,0,0,0,0-2.82Zm-4.05,4.05v3.72H14.64L12,21,9.36,18.36H5.64V14.64L3,12,5.64,9.36V5.64H9.36L12,3l2.64,2.64h3.72V9.36L21,12Z"></path>
                    <path d="M14.24,7.85l-6,7a1,1,0,0,0,1.52,1.3l6-7a1,1,0,0,0-1.52-1.3Z"></path>
                    <path d="M10.9,10.45a1.5,1.5,0,1,0-1.85-1A1.51,1.51,0,0,0,10.9,10.45Z"></path>
                    <path d="M13.1,13.55a1.5,1.5,0,1,0,1.85,1A1.51,1.51,0,0,0,13.1,13.55Z"></path>
                  </svg>
                  <p className="font-semibold text-[#3f4e60]">
                    Доступно в кредит
                  </p>
                </div>
                <Switch
                  onChange={(credit) =>
                    dispatch(setFilterQueries({ ...filterQueries, credit }))
                  }
                  checked={filterQueries.credit}
                />
              </div>
              <div className="mt-2">
                <DebouncedInput
                  placeholder="Год выпуска, От"
                  variant="filled"
                  min={0}
                  max={filterQueries.maxYear}
                  className="font-semibold w-full h-12 mb-[1px] p-2"
                  onChange={(min) =>
                    dispatch(
                      setFilterQueries({
                        ...filterQueries,
                        minYear: min || undefined,
                      })
                    )
                  }
                  value={filterQueries.minYear || undefined}
                />
                <DebouncedInput
                  placeholder="Год выпуска, До"
                  variant="filled"
                  min={filterQueries.minYear}
                  max={new Date().getFullYear()}
                  className="font-semibold w-full h-12 mb-[1px] p-2"
                  onChange={(max) =>
                    dispatch(
                      setFilterQueries({
                        ...filterQueries,
                        maxYear: max || undefined,
                      })
                    )
                  }
                  value={filterQueries.maxYear}
                />
              </div>
              <DebouncedInput
                placeholder="Пробег, До"
                variant="filled"
                min={0}
                className="font-semibold w-full mt-2 h-12 p-2"
                onChange={(mileage) =>
                  dispatch(
                    setFilterQueries({
                      ...filterQueries,
                      mileage: mileage || 0,
                    })
                  )
                }
                value={filterQueries.mileage || undefined}
              />
              <div className="mt-2 bg-[#e8eaee] rounded-md h-12 px-2.5 flex items-center justify-between">
                <p className="font-semibold text-[#3f4e60]">Растаможен в РТ</p>
                <Switch
                  onChange={(saddened) =>
                    dispatch(
                      setFilterQueries({ ...filterQueries, saddened: saddened })
                    )
                  }
                  checked={filterQueries.saddened}
                />
              </div>
              <div className="mt-2 bg-[#e8eaee] rounded-md p-2.5">
                <h5 className="font-bold text-[#5c6774]">КОРОБКА ПЕРЕДАЧ</h5>
                <div className="flex flex-col items-start gap-2 mt-3 select-none">
                  <Checkbox
                    value="auto"
                    className="font-semibold text-[#5c6774]"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            transmission: [
                              ...filterQueries.transmission,
                              e.target.value,
                            ],
                          })
                        );
                      } else {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            transmission: filterQueries.transmission.filter(
                              (i) => i !== e.target.value
                            ),
                          })
                        );
                      }
                    }}
                    checked={filterQueries.transmission.includes("auto")}
                  >
                    Автомат
                  </Checkbox>
                  <Checkbox
                    value="manual"
                    className="font-semibold text-[#5c6774]"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            transmission: [
                              ...filterQueries.transmission,
                              e.target.value,
                            ],
                          })
                        );
                      } else {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            transmission: filterQueries.transmission.filter(
                              (i) => i !== e.target.value
                            ),
                          })
                        );
                      }
                    }}
                    checked={filterQueries.transmission.includes("manual")}
                  >
                    Механика
                  </Checkbox>
                </div>
              </div>
              <div className="mt-2 bg-[#e8eaee] rounded-t-md p-2.5">
                <h5 className="font-bold text-[#5c6774]">ТИП ТОПЛИВА</h5>
                <div className="flex flex-col items-start gap-2 mt-3">
                  <Checkbox
                    value={"elect"}
                    checked={filterQueries.fuelType.includes("elect")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: [
                              ...filterQueries.fuelType,
                              e.target.value,
                            ],
                          })
                        );
                      } else {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: filterQueries.fuelType.filter(
                              (i) => i !== e.target.value
                            ),
                          })
                        );
                      }
                    }}
                    className="font-semibold text-[#5c6774]"
                  >
                    Электрический
                  </Checkbox>
                  <Checkbox
                    value={"benzin"}
                    checked={filterQueries.fuelType.includes("benzin")}
                    className="font-semibold text-[#5c6774]"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: [
                              ...filterQueries.fuelType,
                              e.target.value,
                            ],
                          })
                        );
                      } else {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: filterQueries.fuelType.filter(
                              (i) => i !== e.target.value
                            ),
                          })
                        );
                      }
                    }}
                  >
                    Бензиновый
                  </Checkbox>
                  <Checkbox
                    value={"gibrid"}
                    checked={filterQueries.fuelType.includes("gibrid")}
                    className="font-semibold text-[#5c6774]"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: [
                              ...filterQueries.fuelType,
                              e.target.value,
                            ],
                          })
                        );
                      } else {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: filterQueries.fuelType.filter(
                              (i) => i !== e.target.value
                            ),
                          })
                        );
                      }
                    }}
                  >
                    Гибридный
                  </Checkbox>
                  <Checkbox
                    value={"disel"}
                    checked={filterQueries.fuelType.includes("disel")}
                    className="font-semibold text-[#5c6774]"
                    onChange={(e) => {
                      if (e.target.checked) {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: [
                              ...filterQueries.fuelType,
                              e.target.value,
                            ],
                          })
                        );
                      } else {
                        dispatch(
                          setFilterQueries({
                            ...filterQueries,
                            fuelType: filterQueries.fuelType.filter(
                              (i) => i !== e.target.value
                            ),
                          })
                        );
                      }
                    }}
                  >
                    Дизельный
                  </Checkbox>
                </div>
              </div>
              <div className="mt-[1px] bg-[#e8eaee] rounded-b-md h-12 px-2.5 flex items-center justify-between">
                <p className="font-semibold text-[#3f4e60]">
                  Газовое оборудование
                </p>
                <Switch
                  onChange={(gas) =>
                    dispatch(
                      setFilterQueries({ ...filterQueries, gasEquipment: gas })
                    )
                  }
                  checked={filterQueries.gasEquipment}
                />
              </div>
              <div className="mt-2 bg-[#e8eaee] rounded-md p-2.5">
                <h5 className="font-bold text-[#5c6774]">ЦВЕТ КУЗОВА</h5>
                <div className="flex flex-col items-start gap-2 mt-3">
                  {colorsOptions.map((i, index) => {
                    if (!showAllColors) {
                      if (index >= 5) {
                        return null;
                      }
                    }
                    return (
                      <div
                        key={i.id}
                        className="flex items-center gap-4 cursor-pointer color-block"
                      >
                        <div
                          className={`size-6 rounded bg-white`}
                          style={{ backgroundColor: i.hex }}
                        ></div>
                        <p className="text-[#5c6774] font-semibold text-sm">
                          {i.label}
                        </p>
                      </div>
                    );
                  })}
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => setShowAllColors(!showAllColors)}
                  >
                    {showAllColors ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#ef4444"
                        className="bi bi-dash-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="#008eff"
                        className="bi bi-plus-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                      </svg>
                    )}
                    <p
                      className={`font-semibold text-sm ${
                        showAllColors ? "text-red-500" : "text-[#008eff]"
                      }`}
                    >
                      {showAllColors ? "Скрыт" : "Показать"} все цвета
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 bg-[#e8eaee] rounded-t-md h-12 px-2.5 flex items-center justify-between">
                <p className="font-semibold text-[#3f4e60]">Торг</p>
                <Switch
                  onChange={(e) =>
                    dispatch(setFilterQueries({ ...filterQueries, bargain: e }))
                  }
                  checked={filterQueries.bargain}
                />
              </div>
              <div className="mt-[1px] bg-[#e8eaee] rounded-b-md h-12 px-2.5 flex items-center justify-between">
                <p className="font-semibold text-[#3f4e60]">Обмен</p>
                <Switch
                  onChange={(e) =>
                    dispatch(
                      setFilterQueries({ ...filterQueries, exchange: e })
                    )
                  }
                  checked={filterQueries.exchange}
                />
              </div>
            </div>
          </div>
          <div className="w-[69%]">
            <div className="">
              {filteredDataLoading ? (
                <MainSliderSkeleton
                  limit={12}
                  className="flex flex-wrap"
                  itemWidth="w-[33%]"
                />
              ) : !filteredData.length ? (
                <p className="text-center text-xl">Товары не найден</p>
              ) : (
                <div className="flex flex-wrap justify-start gap-x-3 gap-y-6">
                  {filteredData &&
                    filteredData.map((i) => (
                      <Link
                        key={i.id}
                        to={`/product/${i.id}`}
                        className="w-[32%]"
                      >
                        <Card
                          style={{ cursor: "pointer" }}
                          cover={
                            <div className="overflow-hidden rounded-t-lg relative">
                              <div className="absolute z-10 right-4 top-4 bg-[#ffffff44] hover:bg-[#ffffff7d] rounded-lg flex items-center justify-center p-[2px]">
                                <img src="/heart.png" alt="Bookmark" />
                              </div>
                              <img
                                alt="Car"
                                src="/car.webp"
                                className="transition duration-300 hover:scale-110"
                              />
                            </div>
                          }
                        >
                          <p className="text-lg font-bold flex items-center justify-between">
                            <span title={"Mercedes-Benz GLS K-1200"}>
                              {truncate("Mercedes-Benz GLS K-1200", 15)}
                            </span>
                            <span className="text-[#707070] text-md">2025</span>
                          </p>
                          <p className="text-xl font-bold">
                            {formatNumber(Number(1000000))} сомони
                          </p>
                          <p className="text-[#ff8718] mt-1 font-bold">
                            В кредит от 3500 сом/мес
                          </p>
                          <div className="font-semibold text-[#707070] flex flex-wrap gap-x-4 mt-2">
                            <p>Кроссовер</p>
                            <p>Полный</p>
                            <p>Автомат</p>
                            <p>Бензиновый</p>
                            <p>2.0 л</p>
                            <p>{formatNumber(18100)} км</p>
                          </div>
                          <hr className="mt-5" />
                          <div className="mt-3 flex items-center justify-between">
                            <p className="font-bold text-[#707070]">
                              Вчера • Душанбе
                            </p>
                            <p className="text-[#707070] flex items-center gap-1 font-bold">
                              33{" "}
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
              )}
            </div>
            <div className="mt-7 flex justify-end">
              <Pagination
                defaultCurrent={metaQuery.current_page}
                defaultPageSize={1}
                total={metaQuery.total_pages}
                showSizeChanger={false}
                onChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
