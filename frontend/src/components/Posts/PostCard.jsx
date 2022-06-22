import React, { useState, useRef } from "react";
import { Card, Skeleton } from "antd";

import { useGetPostsQuery } from "../../api/api";
import SinglePostCard from "./SinglePostCard";

const PostCard = () => {
  const [page, setPage] = useState(1);
  const skeletonItems = useRef(Array.from([1, 2]));
  let { currentData, isError, isLoading } = useGetPostsQuery({
    page: page,
  });
  const { Meta } = Card;

  return (
    <>
      {isLoading ||
        currentData.data.map((item) => (
          <SinglePostCard key={item.postId} {...item} />
        ))}

      {isLoading &&
        skeletonItems.current.map((_, idx) => (
          <Card key={idx} className="my-3 max-w-[1000px] rounded-xl">
            <Skeleton loading={isLoading} active>
              <Meta title="Card title" description="This is the description" />
            </Skeleton>
          </Card>
        ))}
    </>
  );
};

export default PostCard;
