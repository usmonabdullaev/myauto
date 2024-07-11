import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CheckingFines = () => {
  return (
    <div className="container mx-auto">
      <div
        className="rounded-xl p-8 mt-8 bg-[#005298]"
        style={{
          backgroundImage: "url(/cam-banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
          boxShadow: "0 4px 66px 0 #0000004e",
          backgroundPositionX: "right",
        }}
      >
        <h1 className="text-3xl font-bold text-white mb-4">
          Проверка штрафов ГАИ
        </h1>
        <p className="max-w-[40%] mb-6 text-white">
          Проверь свои штрафы за дорожные нарушения прямо сейчас!
        </p>
        <Button size="large" className="font-semibold text-[#005298]">
          Подключиться
        </Button>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold">Автолизинг</h2>
        <p className="font-normal">Интересные предложения</p>
      </div>

      <div className="my-10">
        <div className="bg-white rounded-xl p-3 flex items-center gap-5">
          <img
            src="/cam-image.png"
            alt="Banner"
            className="h-full w-[45%] object-cover"
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-[#005298]">
              Проверь свои штрафы за дорожные нарушения прямо с мобильного
              телефона!
            </h3>
            <p className="text-md font-bold text-[#005298] mt-5">Активация</p>
            <h3 className="text-[64px] font-bold text-[#005298] mt-2">
              *0008#
            </h3>
            <p className="text-md font-bold text-[#005298] mt-2">
              Стоимость подписки 7 сомони в месяц
            </p>
            <Link to="tel:*0008#">
              <Button
                type="primary"
                size="large"
                className="bg-[#0eb40e] font-bold mt-3"
              >
                Подключиться
              </Button>
            </Link>
            <p className="text-md text-gray-500 mt-5">
              *Услуга доступна абонентам{" "}
              <span className="text-gray-600 font-semibold">
                Tcell, Babilon-Mobile, МегаФон, AlifMobi и Humo Online
              </span>
              .
              <br />
              Следите за нашими новостями.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <Link
                to="https://www.facebook.com/profile.php?id=100053820500031"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#0077d6"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </Link>
              <Link
                to="https://www.instagram.com/shahri.bekhatar/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#fc3e88"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </Link>
              <Link to="https://t.me/shahri_bekhatar_tj" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#32aadf"
                  className="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckingFines;
