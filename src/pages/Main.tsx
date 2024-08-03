import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Select, Card, InputNumber, TreeSelect, QRCode } from "antd";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import {
  getFilteredData,
  setFilterQueries,
  getPremiumData,
  getSearchCar,
  getNewCars,
  getElectCars,
  getFavorites,
  addFavorite,
  deleteFavorite,
  getModels,
} from "../service/slices/data.ts";
import { formatNumber, truncate } from "../service/functions.ts";
import { MainSliderSkeleton } from "../components/Skeletons.tsx";
import SelectLabel from "../components/SelectLabel.tsx";
import { IMAGE_URL } from "../service/env.tsx";

import "swiper/css";

const Main = () => {
  const dispatch = useAppDispatch();
  const {
    filterQueries,
    metaData,
    premiumData,
    premiumDataLoading,
    searchCar,
    searchCarLoading,
    newData,
    newDataLoading,
    electData,
    electDataLoading,
    favorites,
    models,
  } = useAppSelector((state) => state.data);
  const [swiper, setSwiper] = useState<SwiperType>();
  const [swiper1, setSwiper1] = useState<SwiperType>();
  const [swiper2, setSwiper2] = useState<SwiperType>();
  const [swiper3, setSwiper3] = useState<SwiperType>();
  const [selectedOption, setSelectedOption] = useState("1");
  const [carPrice, setCarPrice] = useState(120000);
  const [firstPrice, setFirstPrice] = useState(20000);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPremiumData());
    dispatch(getSearchCar());
    dispatch(getNewCars());
    dispatch(getElectCars());
    dispatch(getFavorites());
    dispatch(getModels());
  }, [dispatch]);

  const handleFilterChange = (
    value: string,
    query: "model" | "price" | "year"
  ) => {
    if (value && query) {
      if (query === "model") {
        dispatch(setFilterQueries({ ...filterQueries, model: value }));
      } else if (query === "price") {
        dispatch(
          setFilterQueries({
            ...filterQueries,
            minPrice: +value.split("-")[0] || undefined,
            maxPrice: +value.split("-")[1] || undefined,
          })
        );
      } else if (query === "year") {
        dispatch(
          setFilterQueries({
            ...filterQueries,
            minYear: +value || undefined,
            maxYear: +value || undefined,
          })
        );
      }
    }
  };

  useEffect(() => {
    dispatch(getFilteredData({ ...filterQueries, limit: 10 }));
  }, [filterQueries, dispatch]);

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

  const favoritesKeys = favorites.map((i) => i.car_id);

  const modelsOptions = models.map((brand) => {
    return {
      title: brand.name,
      value: brand.id,
      children: brand.models.map((model) => {
        return {
          title: model.name,
          value: `${model.brand_id}-${model.id}`,
        };
      }),
    };
  });

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

      <div className="container mx-auto mt-10 bg-[#e4e9ef] rounded-[20px]">
        <div className="py-6 px-3">
          <h3 className="text-2xl font-medium">Найти автомобиль</h3>
          <div className="mt-4">
            <div className="h-12 flex items-center justify-start">
              <TreeSelect
                className="w-1/6 h-full font-semibold"
                popupClassName="font-semibold"
                dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                placeholder="Марка и модель"
                onChange={(value) => handleFilterChange(value, "model")}
                treeData={modelsOptions}
                treeDefaultExpandAll={false}
                showSearch={false}
                allowClear
              />
              <Select
                placeholder="Цена"
                onChange={(e) => handleFilterChange(e, "price")}
                className="font-semibold h-full w-1/6"
                options={[
                  {
                    value: "10000-50000",
                    label: <SelectLabel>10 000 - 50 000 сом.</SelectLabel>,
                  },
                  {
                    value: "50000-100000",
                    label: <SelectLabel>50 000 - 100 000 сом.</SelectLabel>,
                  },
                  {
                    value: "100000-200000",
                    label: <SelectLabel>100 000 - 200 000 сом.</SelectLabel>,
                  },
                  {
                    value: "200000-500000",
                    label: <SelectLabel>200 000 - 500 000 сом.</SelectLabel>,
                  },
                  {
                    value: "500000-1000000",
                    label: <SelectLabel>500 000 - 1 000 000 сом.</SelectLabel>,
                  },
                ]}
              />
              <Select
                placeholder="Год выпуска"
                onChange={(e) => handleFilterChange(e, "year")}
                className="font-semibold h-full w-1/6"
                options={[
                  {
                    value: "2024",
                    label: <SelectLabel>2024</SelectLabel>,
                  },
                  {
                    value: "2023",
                    label: <SelectLabel>2023</SelectLabel>,
                  },
                  {
                    value: "2022",
                    label: <SelectLabel>2022</SelectLabel>,
                  },
                  {
                    value: "2021",
                    label: <SelectLabel>2021</SelectLabel>,
                  },
                  {
                    value: "2020",
                    label: <SelectLabel>2020</SelectLabel>,
                  },
                ]}
              />
              <Link
                to="/search"
                className="h-full flex items-center justify-center flex-1 bg-[#c2dbf1] text-[#008eff] rounded font-semibold"
              >
                РАСШИРЕННЫЙ ПОИСК
                <Badge dot>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#008eff"
                    className="bi bi-sliders ml-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
                    />
                  </svg>
                </Badge>
              </Link>
              <Link
                to="/search"
                className="h-full flex items-center justify-center flex-1 bg-[#008eff] text-white rounded font-semibold text-md"
              >
                ПОКАЗАТЬ {metaData.total_items || 0} ОБЪЯВЛЕНИЙ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">
            Премиум объявление{" "}
            <span className="text-[#707070] text-base font-normal">
              {premiumData?.length || 0}
            </span>
          </h3>
          <Link
            to="/search"
            className="text-[#008eff] font-semibold border-[1px] border-[#008eff] border-solid p-2 hover:text-white hover:bg-[#008eff] transition"
          >
            ПОСМОТРЕТЬ ВСЕ
          </Link>
        </div>
        {premiumDataLoading ? (
          <MainSliderSkeleton />
        ) : !premiumData?.length ? (
          <p className="text-center text-xl">Пусто</p>
        ) : (
          <div className="relative mt-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSwiper={(s) => setSwiper(s)}
            >
              {premiumData &&
                premiumData.map((i) => (
                  <SwiperSlide key={i.id}>
                    <Link to={`/product/${i.id}`}>
                      <Card
                        style={{ width: 240, cursor: "pointer" }}
                        cover={
                          <div className="overflow-hidden rounded-t-lg relative">
                            <img
                              src="/premium.svg"
                              alt="Premium"
                              className="absolute z-10 -top-[0.4px] -left-[24.4px]"
                            />
                            <div className="absolute z-10 right-4 top-4 bg-[#ffffff44] hover:bg-[#ffffff7d] rounded-lg flex items-center justify-center p-[2px]">
                              {favoritesKeys.includes(i.id) ? (
                                <img
                                  src="/heart-active.png"
                                  width={32}
                                  alt="Bookmark"
                                  className="p-0.5"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteFavorite(i.id));
                                  }}
                                />
                              ) : (
                                <img
                                  src="/heart.png"
                                  alt="Bookmark"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addFavorite(i.id));
                                  }}
                                />
                              )}
                            </div>

                            <img
                              alt="Car"
                              src={`${IMAGE_URL}${i.images[0]?.image}`}
                              className="transition duration-300 hover:scale-110 h-[180px] w-full object-cover"
                              height={180}
                            />
                          </div>
                        }
                      >
                        <p className="text-lg font-bold flex items-center justify-between">
                          <span>{truncate(i.title, 13)}</span>
                          <span className="text-[#707070] text-sm">
                            {i.year}
                          </span>
                        </p>
                        <p className="text-xl font-bold">
                          {formatNumber(i.price)} сомони
                        </p>
                        <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                          {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                        </p>
                      </Card>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div>
              <img
                src="/prev-arr.svg"
                alt="Prev"
                onClick={() => swiper?.slidePrev()}
                className="absolute top-1/4 left-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(-50%)" }}
              />
              <img
                src="/next-arr.svg"
                alt="Next"
                onClick={() => swiper?.slideNext()}
                className="absolute top-1/4 right-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(50%)" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">
            Ищу авто{" "}
            <span className="text-[#707070] text-base font-normal">
              {searchCar?.length || 0}
            </span>
          </h3>
          <span
            onClick={() => {
              dispatch(
                setFilterQueries({
                  page: 1,
                  sortBy: "price",
                  city: "Душанбе",
                  model: "",
                  minPrice: undefined,
                  maxPrice: undefined,
                  credit: false,
                  minYear: undefined,
                  maxYear: undefined,
                  mileage: undefined,
                  saddened: true,
                  transmission: [],
                  gasEquipment: false,
                  fuelType: [],
                  bargain: false,
                  exchange: false,
                  colors: [],
                })
              );
              navigate("/search");
            }}
            className="cursor-pointer text-[#008eff] font-semibold border-[1px] border-[#008eff] border-solid p-2 hover:text-white hover:bg-[#008eff] transition"
          >
            ПОСМОТРЕТЬ ВСЕ
          </span>
        </div>
        {searchCarLoading ? (
          <MainSliderSkeleton />
        ) : !searchCar?.length ? (
          <p className="text-center text-xl">Пусто</p>
        ) : (
          <div className="relative mt-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSwiper={(s) => setSwiper1(s)}
            >
              {searchCar &&
                searchCar.map((i) => (
                  <SwiperSlide key={i.id}>
                    <Link to={`/product/${i.id}`}>
                      <Card
                        style={{ width: 240, cursor: "pointer" }}
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
                              {favoritesKeys.includes(i.id) ? (
                                <img
                                  src="/heart-active.png"
                                  width={32}
                                  alt="Bookmark"
                                  className="p-0.5"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteFavorite(i.id));
                                  }}
                                />
                              ) : (
                                <img
                                  src="/heart.png"
                                  alt="Bookmark"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addFavorite(i.id));
                                  }}
                                />
                              )}
                            </div>
                            <img
                              alt="Car"
                              src={`${IMAGE_URL}${i.images[0].image}`}
                              className="transition duration-300 hover:scale-110 h-[180px] w-full object-cover"
                              height={180}
                            />
                          </div>
                        }
                      >
                        <p className="text-lg font-bold flex items-center justify-between">
                          <span>{truncate(i.title, 13)}</span>
                          <span className="text-[#707070] text-sm">
                            {i.year}
                          </span>
                        </p>
                        <p className="text-xl font-bold">
                          {formatNumber(i.price)} сомони
                        </p>
                        <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                          {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                        </p>
                      </Card>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div>
              <img
                src="/prev-arr.svg"
                alt="Prev"
                onClick={() => swiper1?.slidePrev()}
                className="absolute top-1/4 left-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(-50%)" }}
              />
              <img
                src="/next-arr.svg"
                alt="Next"
                onClick={() => swiper1?.slideNext()}
                className="absolute top-1/4 right-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(50%)" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">
            Новые объявления{" "}
            <span className="text-[#707070] text-base font-normal">
              {newData?.length || 0}
            </span>
          </h3>
          <span
            onClick={() => {
              dispatch(
                setFilterQueries({
                  page: 1,
                  sortBy: "date",
                  city: "",
                  model: "",
                  minPrice: undefined,
                  maxPrice: undefined,
                  credit: false,
                  minYear: undefined,
                  maxYear: undefined,
                  mileage: undefined,
                  saddened: true,
                  transmission: [],
                  gasEquipment: false,
                  fuelType: [],
                  bargain: false,
                  exchange: false,
                  colors: [],
                })
              );
              navigate("/search");
            }}
            className="cursor-pointer text-[#008eff] font-semibold border-[1px] border-[#008eff] border-solid p-2 hover:text-white hover:bg-[#008eff] transition"
          >
            ПОСМОТРЕТЬ ВСЕ
          </span>
        </div>
        {newDataLoading ? (
          <MainSliderSkeleton />
        ) : !newData?.length ? (
          <p className="text-center text-xl">Пусто</p>
        ) : (
          <div className="relative mt-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSwiper={(s) => setSwiper2(s)}
            >
              {newData &&
                newData.map((i) => (
                  <SwiperSlide key={i.id}>
                    <Link to={`/product/${i.id}`}>
                      <Card
                        style={{ width: 240, cursor: "pointer" }}
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
                              {favoritesKeys.includes(i.id) ? (
                                <img
                                  src="/heart-active.png"
                                  width={32}
                                  alt="Bookmark"
                                  className="p-0.5"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteFavorite(i.id));
                                  }}
                                />
                              ) : (
                                <img
                                  src="/heart.png"
                                  alt="Bookmark"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addFavorite(i.id));
                                  }}
                                />
                              )}
                            </div>
                            <img
                              alt="Car"
                              src={`${IMAGE_URL}${i.images[0].image}`}
                              className="transition duration-300 hover:scale-110 h-[180px] w-full object-cover"
                              height={180}
                            />
                          </div>
                        }
                      >
                        <p className="text-lg font-bold flex items-center justify-between">
                          <span>{truncate(i.title, 13)}</span>
                          <span className="text-[#707070] text-sm">
                            {i.year}
                          </span>
                        </p>
                        <p className="text-xl font-bold">
                          {formatNumber(i.price)} сомони
                        </p>
                        <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                          {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                        </p>
                      </Card>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div>
              <img
                src="/prev-arr.svg"
                alt="Prev"
                onClick={() => swiper2?.slidePrev()}
                className="absolute top-1/4 left-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(-50%)" }}
              />
              <img
                src="/next-arr.svg"
                alt="Next"
                onClick={() => swiper2?.slideNext()}
                className="absolute top-1/4 right-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(50%)" }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="container mx-auto mt-12">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">
            Электромобили{" "}
            <span className="text-[#707070] text-base font-normal">
              {electData?.length || 0}
            </span>
          </h3>
          <span
            onClick={() => {
              dispatch(
                setFilterQueries({
                  page: 1,
                  sortBy: "price",
                  city: "",
                  model: "",
                  minPrice: undefined,
                  maxPrice: undefined,
                  credit: false,
                  minYear: undefined,
                  maxYear: undefined,
                  mileage: undefined,
                  saddened: true,
                  transmission: [],
                  gasEquipment: false,
                  fuelType: ["Электрический"],
                  bargain: false,
                  exchange: false,
                  colors: [],
                })
              );
              navigate("/search");
            }}
            className="cursor-pointer text-[#008eff] font-semibold border-[1px] border-[#008eff] border-solid p-2 hover:text-white hover:bg-[#008eff] transition"
          >
            ПОСМОТРЕТЬ ВСЕ
          </span>
        </div>
        {electDataLoading ? (
          <MainSliderSkeleton />
        ) : !electData?.length ? (
          <p className="text-center text-xl">Пусто</p>
        ) : (
          <div className="relative mt-4">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSwiper={(s) => setSwiper3(s)}
            >
              {electData &&
                electData.map((i) => (
                  <SwiperSlide key={i.id}>
                    <Link to={`/product/${i.id}`}>
                      <Card
                        style={{ width: 240, cursor: "pointer" }}
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
                              {favoritesKeys.includes(i.id) ? (
                                <img
                                  src="/heart-active.png"
                                  width={32}
                                  alt="Bookmark"
                                  className="p-0.5"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(deleteFavorite(i.id));
                                  }}
                                />
                              ) : (
                                <img
                                  src="/heart.png"
                                  alt="Bookmark"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addFavorite(i.id));
                                  }}
                                />
                              )}
                            </div>
                            <img
                              alt="Car"
                              src={`${IMAGE_URL}${i.images[0].image}`}
                              className="transition duration-300 hover:scale-110 h-[180px] w-full object-cover"
                              height={180}
                            />
                          </div>
                        }
                      >
                        <p className="text-lg font-bold flex items-center justify-between">
                          <span>{truncate(i.title, 13)}</span>
                          <span className="text-[#707070] text-sm">
                            {i.year}
                          </span>
                        </p>
                        <p className="text-xl font-bold">
                          {formatNumber(i.price)} сомони
                        </p>
                        <p className="text-[#ff8718] mt-1 font-bold h-[22px]">
                          {!!i.credit && `В кредит от ${i.credit} сом/мес`}
                        </p>
                      </Card>
                    </Link>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div>
              <img
                src="/prev-arr.svg"
                alt="Prev"
                onClick={() => swiper3?.slidePrev()}
                className="absolute top-1/4 left-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(-50%)" }}
              />
              <img
                src="/next-arr.svg"
                alt="Next"
                onClick={() => swiper3?.slideNext()}
                className="absolute top-1/4 right-0 z-10 bg-white rounded border-[1px] border-[#707070] p-3 cursor-pointer"
                style={{ transform: "translateX(50%)" }}
              />
            </div>
          </div>
        )}
      </div>

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

      <div className="container mx-auto mt-10">
        <div>
          <h3 className="font-bold text-[#6b747f]">ПОПУЛЯРНЫЕ АВТО</h3>
          <div className="flex items-start justify-between text-[#6b747f] mt-5">
            <div className="flex flex-col items-start gap-4">
              <a href="#1">Audi</a>
              <a href="#1">Hyundai</a>
              <a href="#1">Nissan</a>
              <a href="#1">Toyota</a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a href="#1">BMW</a>
              <a href="#1">KIA</a>
              <a href="#1">Opel</a>
              <a href="#1">Volkswagen</a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a href="#1">Chevrolet</a>
              <a href="#1">Lexus</a>
              <a href="#1">Ravon</a>
              <a href="#1">Ваз (Lada)</a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a href="#1">Daewoo</a>
              <a href="#1">Mazda</a>
              <a href="#1">Renault</a>
              <a href="#1">Газ</a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a href="#1">Ford</a>
              <a href="#1">Mercedes-Benz</a>
              <a href="#1">Skoda</a>
              <a href="#1">Уаз</a>
            </div>
            <div className="flex flex-col items-start gap-4">
              <a href="#1">Honda</a>
              <a href="#1">Mitsubishi</a>
              <a href="#1">Subaru</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
