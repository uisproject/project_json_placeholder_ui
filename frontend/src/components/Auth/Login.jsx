import React, { useEffect } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { UseSelectAuth } from "../../features/authSlice";
import LoginForm from "./LoginForm";

const Login = () => {
  const { isLogged, isError } = UseSelectAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) return;

    navigate("/");
  }, [isLogged]);

  return (
    <>
      <Modal
        title="Login"
        footer={null}
        visible={true}
        centered={true}
        closable={false}
      >
        <LoginForm />
      </Modal>
    </>
  );
};

export default Login;
