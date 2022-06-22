import React from "react";

import PostCard from "../components/Posts/PostCard";
import Container from "../layouts/Container";
import MainLayout from "../layouts/MainLayout";

const PostPage = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <PostCard />
        </Container>
      </MainLayout>
    </>
  );
};

export default PostPage;
