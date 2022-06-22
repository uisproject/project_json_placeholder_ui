import React from "react";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

const LoginButton = () => {
  return (
    <Button
      block={true}
      type="text"
      className="inline-flex justify-end items-center cursor-pointer p-3"
    >
      <LoginOutlined className="text-[1.5em] " />
      <span
        className="font-bold"
        style={{
          userSelect: "none",
        }}
      >
        Login
      </span>
    </Button>
  );
};

export default LoginButton;
