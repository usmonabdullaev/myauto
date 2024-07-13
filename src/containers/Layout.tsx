// import { Dropdown, Space } from "antd";
import {
  // DownOutlined,
  TikTokOutlined,
  InstagramOutlined,
  YoutubeFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../service/hooks.ts";
import { getMe, setShowAuthModal, logout } from "../service/slices/user.ts";
// import type { MenuProps } from "antd";

import AuthModal from "../components/modal/Auth.tsx";
import { Button, Popover } from "antd";

const Layout = () => {
  const dispatch = useAppDispatch();
  const { authorized, user } = useAppSelector((data) => data.user);
  // const [selectedLang, setSelectedLang] = useState("russian");
  // const handleMenuClick: MenuProps["onClick"] = (e) => {
  //   setSelectedLang(e.key);
  // };
  // const items = [
  //   {
  //     label: "Русский",
  //     key: "russian",
  //   },
  //   {
  //     label: "English",
  //     key: "english",
  //   },
  //   {
  //     label: "Тоҷикӣ",
  //     key: "tajik",
  //   },
  // ];

  // const menuProps = {
  //   items,
  //   onClick: handleMenuClick,
  // };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <AuthModal />

      <div className="bg-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
            <div className="flex items-center gap-5 text-[#6b747f]">
              <Link to="/search" className="flex items-center gap-1">
                <img src="/car-check.png" alt="Search" width={24} />
                Поиск авто
              </Link>
              <a href="#1">Новые авто</a>
              <a href="#1">myauto Finance</a>
              <a href="#1">Автоцентры</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="cursor-pointer">
              <img src="/dark-mode.png" alt="Theme" width={24} />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 240 280"
                xmlSpace="preserve"
              >
                <defs></defs>
                <g
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                >
                  <path
                    d="M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "#000",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    strokeLinecap="round"
                  />
                </g>
              </svg> */}
            </div>
            <a href="#1" className="flex items-center gap-1 text-[#008eff]">
              <img src="/car.png" alt="Add auto" width={24} />
              Создать объявление
            </a>
            {authorized ? (
              <Popover
                placement="bottomRight"
                content={
                  <div className="p-2">
                    <div className="border-b flex items-center gap-2 pb-3">
                      {user?.avatar ? (
                        <div className="w-[36px] h-[36px] cursor-pointer">
                          <img
                            src={user.avatar}
                            alt="Avatar"
                            className="size-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="#424b55"
                            className="bi bi-person-circle"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                              fill-rule="evenodd"
                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                          </svg>
                        </div>
                      )}
                      <div>
                        <p className="text-lg font-[600]">{user?.name}</p>
                        <p className="text-xs text-gray-500">ID: {user?._id}</p>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-col items-start gap-2 pl-4">
                      <Link to="#" className="text-[16px] font-[600]">
                        Мои объявления
                      </Link>
                      <Link to="#" className="text-[16px] font-[600]">
                        Настройки
                      </Link>
                      <Link to="#" className="text-[16px] font-[600]">
                        Избранное
                      </Link>
                      <Button
                        type="link"
                        className="pl-0 text-[16px] font-[600] mt-2"
                        onClick={onLogout}
                        danger
                      >
                        Выйти
                      </Button>
                    </div>
                  </div>
                }
              >
                {user?.avatar ? (
                  <div className="w-[36px] h-[36px] cursor-pointer">
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="size-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="#424b55"
                      className="bi bi-person-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                  </div>
                )}
              </Popover>
            ) : (
              <span
                className="text-[#6b747f] cursor-pointer"
                onClick={() => {
                  dispatch(setShowAuthModal(true));
                }}
              >
                Войти
              </span>
            )}

            {/* <Dropdown menu={menuProps}>
              <Link to="/">
                <Space className="text-[#6b747f]">
                  <p className="text-[#6b747f] font-medium">
                    {items
                      .find((i) => i.key === selectedLang)
                      ?.label.slice(0, 3)}
                  </p>
                  <DownOutlined />
                </Space>
              </Link>
            </Dropdown> */}
          </div>
        </div>
      </div>
      <Outlet />
      <div className="container mx-auto mt-16">
        <div className="flex items-start justify-between border-b pb-10">
          <div className="flex items-start gap-16 text-[#6b747f]">
            <div className="flex flex-col items-start gap-2">
              <Link to="/">Главная</Link>
              <Link to="/search">Поиск авто</Link>
              <a href="#1">Создать объявление</a>
              <a href="#1">Автокредит</a>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a href="#1">Профиль</a>
              <a href="#1">Мои объявления</a>
              <a href="#1">Избранное</a>
              <a href="#1">Настройки</a>
              <a href="#1">О компании</a>
            </div>
            <div className="flex flex-col items-start gap-2">
              <a href="#1">Франшиза</a>
              <a href="#1">Пользовательское соглашение</a>
              <a href="#1">Политика конфиденциальности</a>
              <a href="#1">Сбор и обработка персональных данных</a>
            </div>
          </div>
          <div className="flex items-start gap-5 text-[#6b747f]">
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <p>Социальные сети</p>
                <div className="flex items-center gap-1">
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="size-10 bg-[#dbe2e9] hover:bg-[#008eff] transition rounded-lg flex items-center justify-center"
                  >
                    <TikTokOutlined style={{ fontSize: 24 }} />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="size-10 bg-[#dbe2e9] hover:bg-[#008eff] transition rounded-lg flex items-center justify-center"
                  >
                    <InstagramOutlined style={{ fontSize: 24 }} />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="size-10 bg-[#dbe2e9] hover:bg-[#008eff] transition rounded-lg flex items-center justify-center"
                  >
                    <YoutubeFilled style={{ fontSize: 24 }} />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <p>Чат с поддержкой</p>
                <div className="pl-2">
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noreferrer"
                    className="size-10 bg-[#dbe2e9] hover:bg-[#008eff] transition rounded-lg flex items-center justify-center"
                  >
                    <WhatsAppOutlined style={{ fontSize: 24 }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p>Мобильное приложение</p>
              <div className="flex flex-col items-center gap-2">
                <Link to="https://www.apple.com" target="_blank">
                  <img src="/app-store.png" alt="App store" width={180} />
                </Link>
                <Link to="https://play.google.com" target="_blank">
                  <img src="/google-play-1.png" alt="Google play" width={180} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[#6b747f] py-5">
          <p className="flex items-center gap-2">
            © 2020-2024 - Все права защищены{" "}
            <Link to="mailto:info@myauto.tj">info@myauto.tj</Link>
          </p>
          <p className="flex items-center gap-2">
            <Link
              to="https://gravity.tj"
              target="_blank"
              className="font-medium"
            >
              Разработано в <span className="text-[blue]">Gravity Studio</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
