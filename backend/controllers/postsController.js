const asyncHandler = require("express-async-handler");

const { postData, userData, commentData } = require("../data/data");
const { pagination } = require("../utils/pagination");

const getPosts = asyncHandler(async (req, res) => {
  const { limit, page } = req.query;

  const result = pagination(limit, page, postData);

  // Integrate data with another data
  const combinedData = result.data.map((item) => {
    const user = userData.find((user) => user.userId === item.userId);
    const comment = commentData.filter(
      (comment) => comment.postId === item.postId
    );

    return { ...item, ...user, comments: comment };
  });

  res.status(200).json({
    success: true,
    ...result,
    ...{ data: combinedData },
  });
});

const createPost = asyncHandler(async (req, res) => {
  const body = req.body;
  const { postId } = postData.at(0);

  const getUser = userData.find((user) => user.userId === body.userId);

  const newData = { postId: postId + 1, ...body, ...getUser, comments: [] };

  postData.unshift(newData);

  res.status(200).json({
    success: true,
    userData: getUser,
    data: newData,
  });
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const targetedData = postData.find((data) => data.id === Number(id));
  const indexAt = postData.findIndex((data) => data.id === Number(id));

  if (indexAt < 0) {
    return res.status(200).json({
      success: true,
      data: {},
    });
  }

  postData.splice(indexAt, 1);

  res.status(200).json({
    success: true,
    data: targetedData,
  });
});

module.exports = {
  getPosts,
  createPost,
  deletePost,
};
