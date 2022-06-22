import React, { useState } from "react";

import { useGetPostsQuery } from "../api/api";
import Container from "../layouts/Container";
import MainLayout from "../layouts/MainLayout";

const PostPage = () => {
  const [page, setPage] = useState(1);
  const result = useGetPostsQuery({ page: page });

  return (
    <>
      <MainLayout>
        <Container>Hey</Container>
      </MainLayout>
    </>
  );
};

export default PostPage;
