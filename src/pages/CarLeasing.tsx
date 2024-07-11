import React, { useState } from "react";
import { Button, Input, Modal, Typography } from "antd";

import { ICONS } from "../service/env.tsx";
import { ButtonGradient } from "../components/UI/Buttons.tsx";

const CarLeasing = () => {
  const LEASING = [
    {
      id: 1,
      bidTJS: 9,
      bidUSD: 0,
      term: 48,
      bank: "dc",
      text: "Лизинг новых и подержанных легковых автомобилей",
    },
    {
      id: 2,
      bidTJS: 5,
      bidUSD: 10,
      term: 60,
      bank: "oriyonbonk",
      text: "Лизинг новых легковых автомобилей",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <div
        className="rounded-xl p-8 mt-8 bg-[#F3F4F9]"
        style={{
          backgroundImage: "url(/leasing-banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          boxShadow: "0 4px 66px 0 #0000004e",
          backgroundPositionX: "right",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Автолизинг в Таджикистане</h1>
        <p className="max-w-[40%] mb-6">
          Рассчитайте стоимость лизинга, выберите лучшее предложение и оформите
          онлайн
        </p>
        <Button type="primary" size="large" className="font-semibold">
          Оставить заявку
        </Button>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Автолизинг</h2>
        <p className="font-normal">Интересные предложения</p>
      </div>

      <div className="my-10 flex flex-col gap-10">
        {LEASING.map((i) => (
          <div
            key={i.id}
            style={{ boxShadow: "0 4px 66px 0 #0000003d" }}
            className="rounded-xl p-8 grid grid-cols-12 justify-between"
          >
            <div className="col-span-5 flex flex-col justify-center items-start gap-8">
              <div className="flex flex-col items-start gap-2">
                {ICONS[i.bank]}
                <p className="text-md max-w-[70%]">{i.text}</p>
              </div>
            </div>
            <div className="col-span-7 flex flex-col justify-between gap-8">
              <div className="w-full flex items-start justify-between">
                <div className="flex flex flex-col items-start gap-4">
                  <p className="font-normal text-lg">Удорожание</p>
                  <p className="text-2xl font-semibold">{i.bidTJS}%</p>
                </div>
                <div className="flex flex flex-col items-start gap-4">
                  <p className="font-normal text-lg">Аванс</p>
                  <p className="text-2xl font-semibold">{i.bidUSD}%</p>
                </div>
                <div className="flex flex flex-col items-start gap-4">
                  <p className="font-normal text-lg">Срок</p>
                  <p className="text-2xl font-semibold">{i.term} мес.</p>
                </div>
              </div>
              <div className="border-b"></div>
              <div className="flex items-center gap-5">
                <ButtonGradient
                  group="1"
                  block={false}
                  className="font-semibold"
                  onClick={showModal}
                >
                  Оставить заявку
                </ButtonGradient>
                <Button
                  type="primary"
                  className="font-semibold bg-[#d9eeff] text-[#0379d7]"
                  size="large"
                >
                  Рассчитать
                </Button>
                <Button type="link" className="font-semibold" size="large">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="Оставьте заявку"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" size="large">
            Отправить
          </Button>,
        ]}
      >
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <p>Напишите свой номер и мы обязательно с вами свяжемся</p>
          </div>
          <div className="col-span-1">
            <Typography.Title level={5}>Введите имя и фамилию</Typography.Title>
            <Input size="large" placeholder="Введите данные" className="mb-4" />
            <Typography.Title level={5}>Номер телефона</Typography.Title>
            <Input size="large" placeholder="Введите номер" />
            <p className="text-xs mt-2">
              Нажимая кнопку{" "}
              <span className="text-green-500">{"<Отправить>"}</span>, я
              соглашаюсь на обработку моих данных
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CarLeasing;
