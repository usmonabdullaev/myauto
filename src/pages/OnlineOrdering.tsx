import { Badge, Button, Input, message } from "antd";
import React, { ChangeEvent, useState } from "react";
import { CameraOutlined, DeleteOutlined } from "@ant-design/icons";
import { filesToBase64 } from "../service/functions.ts";

const OnlineOrdering = () => {
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState<string[]>([]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
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
        className="rounded-xl p-8 mt-8 bg-[#ececec]"
        style={{
          backgroundImage: "url(/ins-banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          boxShadow: "0 4px 66px 0 #0000004e",
          backgroundPositionX: "right",
        }}
      >
        <h1 className="text-3xl font-bold mb-4">Легко, Быстро, Надежно</h1>
        <p className="max-w-[40%] mb-6">
          Мы предоставляем удобное и эффективное решение для тех, кто ценит свое
          время и хочет поддерживать свой автомобиль в отличной форме.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">
          Онлайн заказ запчастей для Вашего Автомобиля!
        </h2>
        <p className="font-normal">
          Наш сервис обеспечивает быструю доставку прямо к вашему дому или
          мастерской.
          <br />
          Таким образом, вы экономите время, которое могли бы потратить на поиск
          необходимых деталей в городе.
        </p>
      </div>

      <div className="my-10">
        <div className="grid grid-cols-12">
          <div className="col-span-9 bg-white rounded-xl p-4">
            <p className="font-semibold text-lg mb-8">
              Заполните форму, чтобы оформить ваш заказ на запчасти для
              автомобиля.
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
              <div className="col-span-12 grid grid-cols-12 gap-4">
                {imageUrl.map((i, index) => (
                  <div key={index} className="col-span-2 size-[140px]">
                    <Badge
                      size="default"
                      className="size-full"
                      count={
                        <span
                          onClick={() =>
                            setImageUrl(
                              imageUrl.filter((_, index2) => index !== index2)
                            )
                          }
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
                        onError={(event) => {
                          // Error handling
                        }}
                      />
                    </Badge>
                  </div>
                ))}
                <label
                  htmlFor="files"
                  className="border-dashed size-[140px] col-span-2 cursor-pointer border-[1px] border-gray-500 transition hover:border-sky-500 rounded-xl flex items-center justify-center bg-[#fafafa]"
                >
                  <input
                    type="file"
                    accept=".png, .jpg, .jpeg, .heic"
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
              </div>
            </div>
            <Button size="large" type="primary">
              Отправить
            </Button>
          </div>
          <div className="col-span-3"></div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrdering;
