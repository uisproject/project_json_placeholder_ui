import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { loginService } from "../../features/authSlice";

const { useForm } = Form;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form] = useForm();
  const initialState = {
    username: "",
    password: "",
  };

  return (
    <Form
      name="login"
      form={form}
      initialValues={initialState}
      onFinish={() => {
        const body = form.getFieldsValue();
        dispatch(loginService(body));
      }}
    >
      <Form.Item
        className="mb-3"
        name="username"
        rules={[
          {
            required: true,
            pattern: new RegExp(/^[0-9a-zA-Z]+$/),
            message: "Cannot input symbol",
          },
        ]}
      >
        <Input placeholder="Username" name="username" />
      </Form.Item>
      <Form.Item className="mb-3" name="password">
        <Input type="password" placeholder="Password" name="password" />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="text-[#40a9ff] block ml-[auto]"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
