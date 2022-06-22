import React from "react";
import { Layout, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import MenuLayout from "./MenuLayout";

const { Footer, Sider, Content, Header } = Layout;

const MainLayout = ({ children }) => {
  return (
    <>
      <Layout className="min-h-[100vh]">
        <Header className="bg-[white] flex justify-end items-center mb-3">
          <Button
            block={true}
            type="text"
            className="inline-flex items-center cursor-pointer p-3"
          >
            <LoginOutlined className="text-[2em] " />
            <span
              className="font-bold"
              style={{
                userSelect: "none",
              }}
            >
              Login
            </span>
          </Button>
        </Header>
        <Layout>
          <MenuLayout />
          <Content>{children}</Content>
        </Layout>
        <Footer>
          <footer className="h-[50px] flex justify-center items-center text-center">
            Copyright &copy;{new Date().getFullYear()} UISPROJECT
          </footer>
        </Footer>
      </Layout>
    </>
  );
};

export default MainLayout;
