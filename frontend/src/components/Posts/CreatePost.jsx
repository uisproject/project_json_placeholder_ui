import React from "react";
import { Card } from "antd";
import CreatePostForm from "./CreatePostForm";

const CreatePost = () => {
  return (
    <Card className="my-3 rounded-xl">
      <CreatePostForm />
    </Card>
  );
};

export default CreatePost;
