import React, { useState } from "react";
import { Button, Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import LoginModal from "./LoginModal";

const LoginButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <Modal
        visible={isModalVisible}
        title={"Login"}
        footer={null}
        onCancel={() => {
          setIsModalVisible(false);
        }}
      >
        <LoginModal />
      </Modal>

      <Button
        block={true}
        onClick={() => {
          setIsModalVisible(!isModalVisible);
        }}
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
    </>
  );
};

export default LoginButton;
