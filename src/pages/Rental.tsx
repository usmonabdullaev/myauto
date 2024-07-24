import React from "react";
import { Button } from "antd";

const Reantal = () => {
  return (
    <div className="mt-10">
      <div className="container mx-auto">
        <div
          className="rounded-[40px] flex items-center h-[300px] bg-[#f9f9f9]"
          style={{ boxShadow: "0 4px 66px 0 #00000036" }}
        >
          <img
            src="/rental-banner.png"
            alt="Banner"
            className="h-full object-cover"
          />
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-4">
              Арендуйте автомобиль
              <br />
              без лишних забот
            </h2>
            <p className="mb-5">
              У нас всегда есть то, что вам нужно для комфортного
              <br /> передвижения в городе или в поездке с друзьями
            </p>
            <Button type="primary" size="large">
              Бронировать авто
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-white mt-10">
        <div className="container mx-auto">AAA</div>
      </div>
    </div>
  );
};

export default Reantal;
