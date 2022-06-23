import React, { useState, useRef, useEffect } from "react";
import { Card, Skeleton } from "antd";
import { useDispatch } from "react-redux";

import {
  getPostService,
  UseSelectGetPosts,
} from "../../features/getPostSliceAPI";
import SinglePostCard from "./SinglePostCard";

const PostCard = () => {
  const dispatch = useDispatch();
  const { isLoading, data } = UseSelectGetPosts();
  const [page, setPage] = useState(1);
  const skeletonItems = useRef(Array.from([1, 2]));

  const { Meta } = Card;

  useEffect(() => {
    dispatch(getPostService({ limit: 10, page }));
  }, [dispatch, isLoading]);

  return (
    <>
      {isLoading ||
        data.data.map((item) => <SinglePostCard key={item.postId} {...item} />)}

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
