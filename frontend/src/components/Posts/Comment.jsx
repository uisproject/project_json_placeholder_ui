import React from "react";

const Comment = ({ body, email, name }) => {
  return (
    <>
      <div className="flex justify-between py-3">
        <div className="font-bold">{name}</div>
        <div>{email}</div>
      </div>
      <div className="">{body}</div>
    </>
  );
};

export default Comment;
