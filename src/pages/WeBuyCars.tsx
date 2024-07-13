import { Badge, Button, Input, message, Modal, Progress } from "antd";
import React, { ChangeEvent, useState } from "react";
import { CameraOutlined, DeleteOutlined } from "@ant-design/icons";

import { filesToBase64 } from "../service/functions.ts";

const WeBuyCars = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = async (
    e?: ChangeEvent<HTMLInputElement>,
    drop: boolean = false,
    dropFiles?: File[]
  ) => {
    if (drop) {
      const files = dropFiles;
      if (files?.length) {
        if (imageUrl.length + files.length > 5) {
          return message.warning("Максимум лимит изображение 5");
        }
        const base64s = await filesToBase64(files);
        setImageUrl([...imageUrl, ...base64s]);
      }
    }
    const files = e?.target.files;
    if (files) {
      if (imageUrl.length + Array.from(files).length > 5) {
        return message.warning("Максимум лимит изображение 5");
      }
      const base64s = await filesToBase64(Array.from(files));
      setImageUrl([...imageUrl, ...base64s]);
    }
  };

  return (
    <div className="container mx-auto">
      <div
        className="rounded-xl p-8 mt-8 bg-[#f9f9f9]"
        style={{
          backgroundImage: "url(/we-banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          boxShadow: "0 4px 66px 0 #0000004e",
          backgroundPositionX: "right",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">
          Мы покупаем автомобили
          <br />
          по рыночной цене
        </h1>
        <p className="max-w-[40%] mb-6">
          Решили продать свой автомобиль?
          <br />
          Тогда Myauto – это для Вас!
        </p>
        <Button
          type="primary"
          size="large"
          className="font-semibold"
          onClick={showModal}
        >
          Оставить заявку
        </Button>
      </div>

      <div className="my-10">
        <img src="/we-buy-banner.png" alt="banner" className="w-full" />
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" size="large">
            Отправить
          </Button>,
        ]}
        width={1000}
      >
        <div className="rounded-xl p-4">
          <p className="font-semibold text-lg mb-8">
            Заполните форму, чтобы оформить ваш заказ
          </p>
          <Input
            placeholder="ФИО"
            size="large"
            className="mb-4 font-semibold"
          />
          <Input
            placeholder="Телефон"
            size="large"
            className="mb-4 font-semibold"
          />
          <Input
            placeholder="Адрес"
            size="large"
            className="font-semibold mb-4"
          />
          <Input
            placeholder="Марка, Модель, Год выпуска, VIN-код (если доступен)"
            size="large"
            className="font-semibold"
          />
          <p className="font-semibold text-lg mt-6 mb-4">Запчасти:</p>
          <div className="grid grid-cols-12 mb-10 gap-4">
            <Input.TextArea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="font-semibold col-span-12 upload"
              size="large"
              placeholder="Пожалуйста, укажите необходимые запчасти, их количество и краткое описание"
              autoSize={{ minRows: 5, maxRows: 10 }}
            />
            <Progress
              percent={imageUrl.length * 20}
              type="line"
              className="col-span-12"
              size={["100%", 12]}
            />
            <div className="col-span-12 grid grid-cols-5 gap-4">
              {imageUrl.map((i, index) => (
                <div key={index} className="col-span-1 size-[140px]">
                  <Badge
                    size="default"
                    className="size-full"
                    count={
                      <span
                        onClick={() => {
                          setImageUrl(
                            imageUrl.filter((_, index2) => index !== index2)
                          );
                        }}
                        className="bg-red-500 rounded-[50%] text-white size-[24px] flex items-center justify-center cursor-pointer"
                      >
                        <DeleteOutlined className="text-[12px]" />
                      </span>
                    }
                  >
                    <img
                      src={i}
                      alt="Order"
                      className="size-full object-cover rounded-xl select-none"
                      onError={() => {
                        message.warning("Invalid image type");
                        setImageUrl(
                          imageUrl.filter((_, index2) => index !== index2)
                        );
                      }}
                    />
                  </Badge>
                </div>
              ))}
              {imageUrl.length < 5 && (
                <label
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    const files = Array.from(e.dataTransfer.files);
                    handleChange(undefined, true, files);
                  }}
                  htmlFor="files"
                  className="border-dashed size-[140px] col-span-1 cursor-pointer border-[1px] border-gray-500 transition hover:border-sky-500 rounded-xl flex items-center justify-center bg-[#fafafa]"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    id="files"
                    multiple
                    hidden
                  />
                  <label
                    htmlFor="files"
                    style={{ border: 0, background: "none" }}
                    className="flex flex-col items-center w-full cursor-pointer select-none"
                  >
                    <CameraOutlined className="text-[32px]" />
                    <div className="font-[700] mt-2 text-sm text-center">
                      Загрузить фото запчасти
                    </div>
                  </label>
                </label>
              )}
            </div>
          </div>
          <Button size="large" type="primary">
            Отправить
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default WeBuyCars;
