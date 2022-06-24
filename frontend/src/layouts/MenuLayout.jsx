import React, { useState } from "react";
import { RightCircleFilled } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

const { Sider } = Layout;

const MenuLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItemsHandler = ({ key }) => navigate(key); // Navigate page

  return (
    <Sider className="bg-[transparent]" collapsed={collapsed}>
      <RightCircleFilled
        className="text-[2em] py-3 w-[100%] bg-[white]"
        rotate={collapsed ? 0 : 180}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      />
      <nav>
        <Menu items={menuItems} onClick={menuItemsHandler} />
      </nav>
    </Sider>
  );
};

export default MenuLayout;
