import React from "react";
import { Layout, Space } from "antd";
import MenuLayout from "./MenuLayout";
import { UseSelectAuth } from "../features/authSlice";
import { useSelector } from "react-redux";
import LogoutButton from "../components/Auth/LogoutButton";

const { Footer, Content, Header } = Layout;

const MainLayout = ({ children }) => {
  const { userData } = UseSelectAuth();

  return (
    <>
      <Layout className="min-h-[100vh]">
        <Header className="bg-[white]">
          <header className="flex justify-end items-center mb-3">
            <Space className="mx-1">Hi,{userData.name}</Space> |
            <LogoutButton />
          </header>
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
