import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { createPostService } from "../../features/createPostSliceAPI";
import UseAxiosPrivate from "../../hooks/UseAxiosPrivate";
import { UseSelectCreatePostAPI } from "../../features/createPostSliceAPI";
import { UseSelectAuth } from "../../features/authSlice";

const { useForm } = Form;
const { TextArea } = Input;

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const instance = UseAxiosPrivate();
  const { isSuccess, data, isError } = UseSelectCreatePostAPI();
  const { userData } = UseSelectAuth();
  const [form] = useForm();
  const initialValues = {
    title: "",
    body: "",
  };

  const onFinishHandler = () => {
    const body = {
      userId: userData?.userId,
      ...form.getFieldsValue(),
    };

    dispatch(createPostService({ instance: instance, body: body }));
    form.resetFields();
  };

  return (
    <Form initialValues={initialValues} form={form} onFinish={onFinishHandler}>
      <Form.Item
        name="title"
        className="mb-3"
        rules={[{ required: true, message: "Please input your title!" }]}
      >
        <Input placeholder="What's on your mind?" className="rounded-xl py-2" />
      </Form.Item>

      <Form.Item
        name="body"
        rules={[{ required: true, message: "Please input your Post!" }]}
      >
        <TextArea
          autoSize={{ minRows: 3 }}
          placeholder="What's on your mind?"
          className="resize-none rounded-xl py-5"
        />
      </Form.Item>
      <Form.Item className="float-right">
        <Button htmlType="submit" className="btn btn-primary">
          Post
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePostForm;
