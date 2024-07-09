import { Breadcrumb, Card } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import { formatNumber, truncate } from "../service/functions.ts";
import { IMAGE_URL } from "../service/env.ts";
import { getShowrooms } from "../service/slices/data.ts";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";

const BuyOnline = () => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const dispatch = useAppDispatch();
  const { showrooms } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getShowrooms());
  }, [dispatch]);

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
              <div className="grid grid-cols-4 gap-2 mt-4 justify-between">
                <Card
                  className="bg-[#008eff] ant-card cursor-pointer"
                  cover={
                    <div className="p-2">
                      <img
                        alt="example"
                        className="h-[120px] w-full object-cover"
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80"
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={<p className="text-white text-center">Hyundai</p>}
                  />
                </Card>
                <Card
                  className="bg-[#e1e7ec] ant-card cursor-pointer"
                  cover={
                    <div className="p-2">
                      <img
                        alt="example"
                        className="h-[120px] w-full object-cover"
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80"
                      />
                    </div>
                  }
                >
                  <Card.Meta title={<p className="text-center">Hyundai</p>} />
                </Card>
              </div>
              <h3 className="font-bold text-xl text-[#0a192d] mt-6">
                Выберите модель
              </h3>
              <div className="grid grid-cols-3 gap-2 mt-4 justify-between">
                <Card
                  className="ant-card2 cursor-pointer"
                  cover={
                    <div className="bg-[#e1e7ec] p-2">
                      <img
                        alt="example"
                        className="h-[160px] w-full object-cover"
                        src="https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80"
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={
                      <div>
                        <small className="font-semibold">Hyundai Tucson</small>
                        <h3 className="text-xl font-semibold">
                          {formatNumber(133000)} сом.
                        </h3>
                        <p className="text-[#ff8718] mt-1 font-bold mt-0">
                          В кредит от 2000 сом/мес
                        </p>
                      </div>
                    }
                  />
                </Card>
              </div>
            </div>
            <div className="rounded-xl bg-white px-4 py-7 mt-6">
              <div className="relative mt-4">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={5}
                  onSwiper={(s) => setSwiper(s)}
                >
                  {showrooms &&
                    showrooms.map((i) => (
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
                                  <img src="/heart.png" alt="Bookmark" />
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
            </div>
          </div>
          <div>AA</div>
        </div>
      </div>
    </div>
  );
};

export default BuyOnline;
