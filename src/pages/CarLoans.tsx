import React from "react";
import { Button } from "antd";

const CarLoans = () => {
  const LOANS = [];

  return (
    <div className="container mx-auto">
      <div
        className="rounded-xl p-8 mt-8 bg-[#ebf2ea]"
        style={{
          backgroundImage: "url(/loans-banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          boxShadow: "0 4px 66px 0 #0000004e",
          backgroundPositionX: "right",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Автокредиты в Таджикистане</h1>
        <p className="max-w-[40%] mb-6">
          Рассчитать кредит на авто, сравнить условия по автокредитованию,
          выяснить, где лучше взять кредит на машину, и оформить онлайн-заявку в
          банк
        </p>
        <Button type="primary" size="large" className="font-semibold">
          Оставить заявку
        </Button>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Автокредиты</h2>
        <p className="font-normal">
          Мы подобрали для вас {LOANS.length} автокредитов в Таджикистане
        </p>
      </div>
    </div>
  );
};

export default CarLoans;
