import React from "react";
import { Card } from "antd";
import CreatePostForm from "./CreatePostForm";

const CreatePost = () => {
  return (
    <div className="my-3 bg-white px-5 pt-5 min-w-[90%] max-w-[90%] mx-auto rounded-xl">
      <CreatePostForm />
    </div>
  );
};

export default CreatePost;
