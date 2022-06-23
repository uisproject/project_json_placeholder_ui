import React from "react";
import { Layout } from "antd";

import MenuLayout from "./MenuLayout";
import { UseSelectAuth } from "../features/authSlice";

const { Footer, Content, Header } = Layout;

const MainLayout = ({ children }) => {
  const { isLogged } = UseSelectAuth();

  return (
    <>
      <Layout className="min-h-[100vh]">
        <Header className="bg-[white] flex justify-end items-center mb-3"></Header>
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
