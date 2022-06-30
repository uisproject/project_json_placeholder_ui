import React from "react";
import { Card } from "antd";
import CreatePostForm from "./CreatePostForm";

const CreatePost = () => {
  return (
    <Card className="my-3 min-w-[90%] max-w-[90%] mx-auto rounded-xl">
      <CreatePostForm />
    </Card>
  );
};

export default CreatePost;
