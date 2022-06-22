import React from "react";
import { Layout } from "antd";

const Container = ({ children, style, className }) => {
  return (
    <Layout className={`px-5 ${className}`} style={{ ...style }}>
      {children}
    </Layout>
  );
};

export default Container;
