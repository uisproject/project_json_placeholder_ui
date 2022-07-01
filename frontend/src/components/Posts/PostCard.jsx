import React, { useState, useRef, useEffect } from "react";
import { Card, Skeleton } from "antd";
import { useDispatch } from "react-redux";

import {
  getPostService,
  UseSelectGetPosts,
} from "../../features/getPostSliceAPI";
import SinglePostCard from "./SinglePostCard";
import UseAxiosPrivate from "../../hooks/UseAxiosPrivate";
import { UseSelectCreatePostAPI } from "../../features/createPostSliceAPI";

const PostCard = () => {
  const dispatch = useDispatch();
  const instance = UseAxiosPrivate();
  const { isLoading, data, isError } = UseSelectGetPosts();
  // const { createdData } = UseSelectCreatePostAPI();
  const [page, setPage] = useState(1);
  const skeletonItems = useRef(Array.from([1, 2]));

  const { Meta } = Card;

  console.log(data);

  useEffect(() => {
    dispatch(getPostService({ instance: instance, limit: 10, page: 1 }));
  }, [dispatch, isLoading]);

  return (
    <>
      {isLoading ||
        data?.data?.map((item) => (
          <SinglePostCard key={item.postId} {...item} />
        ))}

      {isLoading &&
        skeletonItems.current.map((_, idx) => (
          <Card key={idx} className="my-3 mx-auto max-w-[1000px] rounded-xl">
            <Skeleton loading={isLoading} active>
              <Meta title="Card title" description="This is the description" />
            </Skeleton>
          </Card>
        ))}
    </>
  );
};

export default PostCard;
