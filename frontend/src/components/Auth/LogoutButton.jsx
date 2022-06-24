import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../features/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <Space
      className="flex items-center cursor-pointer select-none mx-1"
      onClick={() => {
        dispatch(logoutHandler());
      }}
    >
      <span className="block font-bold">Logout</span>
      <LogoutOutlined className="block" />
    </Space>
  );
};

export default LogoutButton;
