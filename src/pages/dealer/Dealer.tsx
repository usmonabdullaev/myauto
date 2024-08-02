import { Breadcrumb, Card } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { formatDate, formatNumber, truncate } from "../../service/functions.ts";
import { IMAGE_URL } from "../../service/env.tsx";
import { MainSliderSkeleton } from "../../components/Skeletons.tsx";
import { useAppDispatch, useAppSelector } from "../../service/hooks.ts";
import {
  getUserInfo,
  getFavorites,
  deleteFavorite,
  addFavorite,
} from "../../service/slices/data.ts";

const Dealer = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { userInfo, userInfoLoading, favorites } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    if (id) {
      dispatch(getUserInfo(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const favoritesKeys = favorites.map((i) => i.car_id);

  if (!userInfo) return null;

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
              title: (
                <span className="font-semibold">Все объявления автора</span>
              ),
            },
          ]}
        />
      </div>

      <div className="container mx-auto my-8">
        <div className="flex items-start justify-between w-100">
          <div className="w-[29%]">
            <div className="rounded-lg p-4 bg-[#e4e9ef]">
              {userInfo.user.avatar ? (
                <img
                  src={`${IMAGE_URL}${userInfo.user.avatar}`}
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="rounded-[50%]"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#77818d"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              )}
              <h2 className="mt-2 font-bold text-[#0a192d] text-2xl">
                Пользователь {userInfo.user.name}
              </h2>
              <p className="text-[#77818d] mt-2">
                {userInfo?.cars.length} объявления
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#77818d"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <p className="text-[#0a192d] flex flex-col items-start">
                    <span className="text-xs text-[#77818d] font-normal">
                      Адрес автосалона
                    </span>
                    <span className="font-semibold text-[#2d3744]">
                      г. Душанбе, Рудаки 94
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#77818d"
                    className="bi bi-clock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  </svg>
                  <p className="text-[#0a192d] flex flex-col items-start">
                    <span className="text-xs text-[#77818d] font-normal">
                      График работы
                    </span>
                    <span className="font-semibold text-[#2d3744]">
                      Ежедневно 09:00 - 21:00
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
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
                    <span className="text-xs text-[#77818d] font-normal">
                      Номер телефона
                    </span>
                    <span className="font-semibold text-[#2d3744]">
                      {userInfo.user.phone}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[69%]">
            <div>
              {userInfoLoading ? (
                <MainSliderSkeleton
                  limit={3}
                  className="flex flex-wrap"
                  itemWidth="w-[33%]"
                />
              ) : !userInfo.cars.length ? (
                <p className="text-center text-xl">Пусто</p>
              ) : (
                <div className="flex flex-wrap justify-start gap-x-3 gap-y-6">
                  {userInfo.cars &&
                    userInfo.cars.map((i) => (
                      <Link
                        key={i.id}
                        to={`/dealers/car/${i.id}`}
                        className="w-[32%]"
                      >
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
                                alt={i.title}
                                src={`${IMAGE_URL}${i.images[0].image}`}
                                className="transition duration-300 hover:scale-110 h-[180px] w-full object-cover"
                                height={180}
                              />
                            </div>
                          }
                        >
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealer;
