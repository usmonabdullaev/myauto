import { Dropdown, Space } from "antd";
import {
  DownOutlined,
  MailOutlined,
  TikTokOutlined,
  InstagramOutlined,
  YoutubeFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import type { MenuProps } from "antd";

const Layout = () => {
  const [selectedLang, setSelectedLang] = useState("russian");
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setSelectedLang(e.key);
  };
  const items = [
    {
      label: "Русский",
      key: "russian",
    },
    {
      label: "English",
      key: "english",
    },
    {
      label: "Тоҷикӣ",
      key: "tajik",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div>
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
            <div>
              <img src="/dark-mode.png" alt="Theme" width={24} />
            </div>
            <a href="#1" className="flex items-center gap-1 text-[#008eff]">
              <img src="/car.png" alt="Add auto" width={24} />
              Создать объявление
            </a>
            <a href="#1" className="text-[#6b747f]">
              Войти
            </a>
            <Dropdown menu={menuProps}>
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
            </Dropdown>
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
                <a href="/">
                  <img src="/app-store.png" alt="App store" width={180} />
                </a>
                <a href="/">
                  <img src="/google-play-1.png" alt="Google play" width={180} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[#6b747f] py-5">
          <p>© 2020-2023 - Все права защищены Myauto Group</p>
          <p className="flex items-center gap-2">
            <MailOutlined style={{ fontSize: 22 }} /> info@myauto.tj
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
