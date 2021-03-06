import React from "react";
import CreatePost from "../components/Posts/CreatePost";

import PostCard from "../components/Posts/PostCard";
import Container from "../layouts/Container";
import MainLayout from "../layouts/MainLayout";

const PostPage = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <CreatePost />
          <PostCard />
        </Container>
      </MainLayout>
    </>
  );
};

export default PostPage;
