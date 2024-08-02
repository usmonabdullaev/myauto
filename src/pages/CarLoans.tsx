import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
  Slider,
  Typography,
} from "antd";

import { ButtonGradient } from "../components/UI/Buttons.tsx";
import { ICONS } from "../service/env.tsx";
import { formatNumber } from "../service/functions.ts";

const CarLoans = () => {
  const LOANS = [
    {
      id: 1,
      promotion: true,
      bidTJS: 13,
      bidUSD: 7,
      term: 4,
      bank: "alif",
    },
    {
      id: 2,
      promotion: false,
      bidTJS: 10,
      bidUSD: 11,
      term: 5,
      bank: "eskhata",
    },
    {
      id: 3,
      promotion: false,
      bidTJS: 13,
      bidUSD: 7,
      term: 4,
      bank: "humo",
    },
    {
      id: 4,
      promotion: false,
      bidTJS: 13,
      bidUSD: 7,
      term: 4,
      bank: "spitamen",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [currency, setCurrency] = useState<"c" | "$">("c");
  const [price, setPrice] = useState(100000);
  const [prepayment, setPrepayment] = useState(20000);
  const [finance, setFinance] = useState(80000);
  const [finance2, setFinance2] = useState(12);

  const onChangeCurrency = (e: RadioChangeEvent) => {
    setCurrency(e.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

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

      <div className="my-10 flex flex-col gap-10">
        {LOANS.map((i) => (
          <div
            key={i.id}
            style={{ boxShadow: "0 4px 66px 0 #0000003d" }}
            className="rounded-xl p-8 grid grid-cols-12 justify-between"
          >
            <div className="col-span-5 flex flex-col justify-between items-start gap-8">
              <div></div>
              <div className="flex flex-col items-start gap-2">
                {ICONS[i.bank]}
                <p className="text-md">На покупку автомобиля</p>
              </div>
              <div>
                {i.promotion && (
                  <>
                    <div className="flex items-center gap-2 mb-1">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.5 12.6665C28.5 10.1469 27.4991 7.73059 25.7175 5.94899C23.9359 4.16739 21.5196 3.1665 19 3.1665C16.4804 3.1665 14.0641 4.16739 12.2825 5.94899C10.5009 7.73059 9.5 10.1469 9.5 12.6665C9.5 23.7498 4.75 26.9165 4.75 26.9165H33.25C33.25 26.9165 28.5 23.7498 28.5 12.6665Z"
                          stroke="#008EFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.7392 33.25C21.4608 33.7299 21.0613 34.1282 20.5806 34.4051C20.0998 34.682 19.5548 34.8277 19 34.8277C18.4453 34.8277 17.9002 34.682 17.4195 34.4051C16.9388 34.1282 16.5392 33.7299 16.2609 33.25"
                          stroke="#008EFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-[#008eff] text-xl">Акция</p>
                    </div>
                    <p className="text-sm">
                      Годовая комиссия всего 7% в долларах и 13% в сомони
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="col-span-7 flex flex-col justify-between gap-8">
              <div className="w-full flex items-start justify-between">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-normal text-lg">Годовая ставка в TJS</p>
                  <p className="text-2xl font-semibold">{i.bidTJS}%</p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <p className="font-normal text-lg">Годовая ставка в USD</p>
                  <p className="text-2xl font-semibold">{i.bidUSD}%</p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <p className="font-normal text-lg">Срок</p>
                  <p className="text-2xl font-semibold">до {i.term} лет</p>
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
                  onClick={showModal2}
                  className="font-semibold bg-[#d9eeff] text-[#0379d7]"
                  size="large"
                >
                  Рассчитать в кредит
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

      <Modal
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
        footer={[]}
        width={800}
      >
        <div className="grid grid-cols-12">
          <div className="col-span-7">
            <div className="flex items-center gap-4 mb-5">
              <p className="text-gray-500">Валюта:</p>
              <Radio.Group
                onChange={onChangeCurrency}
                value={currency}
                size="large"
              >
                <Radio value="$">Доллар США</Radio>
                <Radio value="c">Сомони</Radio>
              </Radio.Group>
            </div>

            <p className="text-gray-500">Стоимость авто</p>
            <p className="text-2xl font-bold">
              {formatNumber(price)} {currency}.
            </p>
            <Slider
              min={50000}
              max={1000000}
              defaultValue={100000}
              className="w-[90%]"
              step={10}
              onChange={(e) => setPrice(e)}
            />

            <p className="text-gray-500">Предоплата</p>
            <p className="text-2xl font-bold">
              {formatNumber(prepayment)} {currency}.
            </p>
            <Slider
              min={20000}
              max={100000}
              defaultValue={20000}
              className="w-[90%]"
              onChange={(e) => setPrepayment(e)}
              step={10}
            />

            <p className="text-gray-500">Сумма финансирования</p>
            <p className="text-2xl font-bold">
              {formatNumber(finance)} {currency}.
            </p>
            <Slider
              min={80000}
              max={160000}
              defaultValue={80000}
              className="w-[90%]"
              step={10}
              onChange={(e) => setFinance(e)}
            />

            <p className="text-gray-500">Срок финансирования в месяц</p>
            <p className="text-2xl font-bold">{finance2}</p>
            <Slider
              min={12}
              max={48}
              defaultValue={12}
              className="w-[90%]"
              onChange={(e) => setFinance2(e)}
              marks={{
                12: "12",
                24: "24",
                36: "36",
                48: "48",
              }}
            />
          </div>
          <div className="col-span-5">
            <div className="rounded-lg bg-[#F7F8F9] p-4 mt-10">
              <p className="text-gray-500">Фактическая переплата</p>
              <p className="text-2xl font-bold">
                {formatNumber(10400)} {currency}.
              </p>

              <p className="text-gray-500">Ежемесячный платёж</p>
              <p className="text-2xl font-bold">
                {formatNumber(7533.333).replace(",", ".")} {currency}.
              </p>

              <p className="text-gray-500">Общая сумма комиссии</p>
              <p className="text-2xl font-bold mb-4">13%</p>

              <Button type="primary" size="large" block>
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CarLoans;
