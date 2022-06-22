import React, { useState } from "react";

import { useGetPostsQuery } from "../../api/api";
import SinglePostCard from "./SinglePostCard";

const PostCard = () => {
  const [page, setPage] = useState(1);
  const { currentData, isError, isLoading } = useGetPostsQuery({
    page: page,
  });

  return (
    <>
      {isLoading
        ? null
        : currentData.data.map((item) => (
            <SinglePostCard key={item.postId} {...item} />
          ))}
    </>
  );
};

export default PostCard;
