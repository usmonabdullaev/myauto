import React, { ReactNode, useEffect, useState } from "react";
import { Button, Form, Input, message, Modal, Steps } from "antd";

import {
  setShowAuthModal,
  login,
  register,
  checkPhone,
} from "../../service/slices/user.ts";
import { useAppDispatch, useAppSelector } from "../../service/hooks.ts";
import { Link } from "react-router-dom";

const AuthModal = ({ title = "" }: { title?: ReactNode }) => {
  const [steps, setSteps] = useState<"login" | "register">("login");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loginStep, setLoginStep] = useState<0 | 1>(0);
  const [registerStep, setRegisterStep] = useState<0 | 1 | 2>(0);
  const { showAuthModal, userLoading, authorized } = useAppSelector(
    (data) => data.user
  );
  const dispatch = useAppDispatch();

  const handleOk = () => {
    dispatch(setShowAuthModal(false));
  };

  const handleCancel = () => {
    dispatch(setShowAuthModal(false));
  };

  useEffect(() => {
    setLoginStep(authorized ? 1 : 0);
    setRegisterStep(authorized ? 2 : 0);
    setSteps("login");
  }, [authorized]);

  const onLogin = (data: { phone: string }) => {
    if (data.phone.length !== 9) {
      return message.warning("Номер должен содержать 9 цифр!");
    }
    dispatch(
      login({
        body: { phone: data.phone },
        onSuccess: () => setLoginStep(1),
      })
    );
  };

  const onCheckPhone = (data: { phone: string }) => {
    if (data.phone.length !== 9) {
      return message.warning("Номер должен содержать 9 цифр!");
    }
    dispatch(
      checkPhone({
        phone: data.phone,
        onSuccess: () => setRegisterStep(1),
      })
    );
  };

  const onRegister = () => {
    dispatch(
      register({
        body: { phone, name, created: String(new Date()) },
        onSuccess: () => setRegisterStep(2),
      })
    );
  };

  return (
    <Modal
      width={700}
      title={title}
      open={showAuthModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <div>
        <div className="flex justify-center">
          {/* <img src="/logo.svg" alt="Logo" width={160} /> */}
        </div>
        <p className="text-center font-bold text-2xl mt-4">
          {steps === "login"
            ? "ВОЙТИ"
            : steps === "register"
            ? "РЕГИСТРАЦИЯ"
            : ""}
        </p>
        <div className="flex justify-center mt-3">
          {steps === "login" ? (
            <Steps
              className="w-[400px]"
              current={loginStep}
              items={[
                {
                  title: "Введите номер",
                },
                {
                  title: "Готово",
                  status: authorized ? "finish" : "wait",
                },
              ]}
            />
          ) : steps === "register" ? (
            <Steps
              className="w-[600px]"
              current={registerStep}
              items={[
                {
                  title: "Введите номер",
                },
                {
                  title: "Введите имя",
                },
                {
                  title: "Готово",
                  status: authorized ? "finish" : "wait",
                },
              ]}
            />
          ) : null}
        </div>
        <div>
          {steps === "login" ? (
            loginStep === 0 ? (
              <div>
                <Form
                  name="login"
                  className="mt-6 mb-5 flex flex-col items-center w-full gap-2"
                  onFinish={onLogin}
                >
                  <Form.Item
                    rules={[
                      { required: true, message: "Введите номер телефона" },
                    ]}
                    name="phone"
                  >
                    <Input
                      type="number"
                      placeholder="Номер телефон"
                      size="large"
                      className="w-[400px] no-spin"
                      addonBefore="+992"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      disabled={userLoading}
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-[400px]"
                    disabled={userLoading}
                  >
                    ВОЙТИ
                  </Button>
                </Form>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 mt-5">
                <p className="text-2xl font-bold">
                  Вы успешно зарегистрировались!
                </p>
                <img src="/success.svg" alt="Success" />
                <Link to="/" onClick={handleCancel}>
                  <Button size="large" type="primary" className="font-semibold">
                    На главную
                  </Button>
                </Link>
              </div>
            )
          ) : steps === "register" ? (
            registerStep === 0 ? (
              <div>
                <Form
                  name="login"
                  className="mt-6 mb-5 flex flex-col items-center w-full gap-2"
                  onFinish={onCheckPhone}
                >
                  <Form.Item
                    rules={[
                      { required: true, message: "Введите номер телефона" },
                    ]}
                    name="phone"
                  >
                    <Input
                      type="number"
                      placeholder="Номер телефон"
                      size="large"
                      className="w-[400px] no-spin"
                      addonBefore="+992"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      disabled={userLoading}
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-[400px]"
                    disabled={userLoading}
                  >
                    Далее
                  </Button>
                </Form>
              </div>
            ) : registerStep === 1 ? (
              <div>
                <Form
                  name="login"
                  className="mt-6 mb-5 flex flex-col items-center w-full gap-2"
                  onFinish={onRegister}
                >
                  <Form.Item
                    rules={[{ required: true, message: "Введите имя" }]}
                    name="name"
                  >
                    <Input
                      placeholder="Введите имя"
                      size="large"
                      className="w-[400px]"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      disabled={userLoading}
                    />
                  </Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="w-[400px]"
                    disabled={userLoading}
                  >
                    Зарегитрироваться
                  </Button>
                </Form>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 mt-5">
                <p className="text-2xl font-bold">
                  Вы успешно зарегистрировались!
                </p>
                <img src="/success.svg" alt="Success" />
                <Link to="/" onClick={handleCancel}>
                  <Button size="large" type="primary" className="font-semibold">
                    На главную
                  </Button>
                </Link>
              </div>
            )
          ) : null}
        </div>
        <div className="flex justify-center">
          {steps === "login"
            ? loginStep !== 1 && (
                <p>
                  Нет аккаунта?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setSteps("register");
                    }}
                  >
                    Зарегистрироватся
                  </span>
                </p>
              )
            : steps === "register"
            ? registerStep !== 2 && (
                <p>
                  Уже есть аккаунт?{" "}
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => {
                      setSteps("login");
                    }}
                  >
                    Войти
                  </span>
                </p>
              )
            : null}
        </div>
      </div>
    </Modal>
  );
};

export default AuthModal;
