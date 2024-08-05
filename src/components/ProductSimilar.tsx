import React from "react";
import { cn, formatNumber, truncate } from "../service/functions.ts";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { IMAGE_URL } from "../service/env.tsx";
import { MainSliderSkeleton } from "./Skeletons.tsx";
import { ProductType } from "../service/types";

interface Props {
  className?: string;
  loading?: boolean;
  items?: ProductType[];
}

export const ProductSimilar: React.FC<Props> = ({
  className,
  loading,
  items,
}) => {
  return (
    <div className={cn("", className)}>
      <h3 className="font-bold text-xl">Похожие объявления</h3>
      {loading ? (
        <MainSliderSkeleton limit={5} />
      ) : !items?.length ? (
        <p className="text-center text-xl font-medium">
          Нет похожих объявлений
        </p>
      ) : (
        <div className="mt-4 flex item-center gap-4 justify-start">
          {items &&
            items.map((i) => (
              <Link className="w-[19%]" to={`/product/${i.id}`} key={i.id}>
                <Card
                  style={{ cursor: "pointer" }}
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
  );
};
