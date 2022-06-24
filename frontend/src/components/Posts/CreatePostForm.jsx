import React from "react";
import { Form, Input } from "antd";

const { useForm } = Form;

const CreatePostForm = () => {
  const [form] = useForm();
  const initialValues = {
    post: "",
  };

  return (
    <Form initialValues={initialValues} form={form}>
      <Form.Item name="input-post">
        <Input placeholder="What's on your mind?" />
      </Form.Item>
    </Form>
  );
};

export default CreatePostForm;
