import React, { useState } from "react";
import { Card, Divider } from "antd";

import Comment from "./Comment";

const SinglePostCard = ({ body, email, title, username, comments }) => {
  const [totalComments, setTotalComments] = useState(2);
  const { Meta } = Card;

  const viewMoreCommentsHandler = () =>
    setTotalComments((prev) =>
      totalComments < comments.length ? prev + 5 : prev
    );

  return (
    <>
      <div className="w-[90%] mx-auto">
        <Card title={username} extra={email} className="my-3 rounded-xl">
          <Meta title={title} className="text-[32px] pb-3" />
          <p>{body}</p>

          <Divider>Comments</Divider>

          {totalComments <= comments.length ? (
            <p
              className="cursor-pointer inline-block"
              style={{
                userSelect: "none",
              }}
              onClick={viewMoreCommentsHandler}
            >
              View {comments.length - totalComments} more comments
            </p>
          ) : null}

          {comments.slice(0, totalComments).map((comment) => (
            <Comment key={comment.commentId} {...comment} />
          ))}
        </Card>
      </div>
    </>
  );
};

export default SinglePostCard;
