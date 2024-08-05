import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { Swiper as SwiperType } from "swiper";

import { cn, formatNumber, truncate } from "../service/functions.ts";
import { MainSliderSkeleton } from "./Skeletons.tsx";
import { IMAGE_URL } from "../service/env.tsx";
import { ProductType } from "../service/types.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from "../service/slices/data.ts";

interface Props {
  className?: string;
  items?: ProductType[];
  loading: boolean;
  title: string;
}

export const CarGroups: React.FC<Props> = ({
  className,
  items,
  loading,
  title,
}) => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const favoritesKeys = favorites.map((i) => i.car_id);

  return (
    <div className={cn("", className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">
          {title}{" "}
          <span className="text-[#707070] text-base font-normal">
            {items?.length || 0}
          </span>
        </h3>
        <Link
          to="/search"
          className="text-[#008eff] font-semibold border-[1px] border-[#008eff] border-solid p-2 hover:text-white hover:bg-[#008eff] transition"
        >
          ПОСМОТРЕТЬ ВСЕ
        </Link>
      </div>
      {loading ? (
        <MainSliderSkeleton />
      ) : !items?.length ? (
        <p className="text-center text-xl">Пусто</p>
      ) : (
        <div className="relative mt-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            onSwiper={(s) => setSwiper(s)}
          >
            {items &&
              items.map((i) => (
                <SwiperSlide key={i.id}>
                  <Link to={`/product/${i.id}`}>
                    <Card
                      style={{ width: 240, cursor: "pointer" }}
                      cover={
                        <div className="overflow-hidden rounded-t-lg relative">
                          {i.tarif === "PREMIUM" && (
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
                            src={`${IMAGE_URL}${i.images[0]?.image}`}
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
              style={{ transform: "translateX(-50%)" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
