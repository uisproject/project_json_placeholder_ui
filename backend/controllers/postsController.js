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

const getSinglePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const findData = postData.find((data) => data.id === Number(id));
  const result = pagination(1, 1, [findData]);

  res.status(200).json({
    success: true,
    ...result,
  });
});

const createPost = asyncHandler(async (req, res) => {
  const body = req.body;
  const { userId, postId } = postData
    .filter((post) => post.userId === body.userId)
    .at(-1);

  const getUser = userData.find((user) => user.userId === userId);

  const newData = { ...body, postId: postId + 1 };

  postData.unshift(newData);

  res.status(200).json({
    success: true,
    userData: getUser,
    data: newData,
  });
});

const updatePost = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  const foundData = postData.find((data) => data.id === Number(id));

  if (!foundData) {
    return res.status(200).json({
      success: true,
      data: {},
    });
  }

  const updatedData = {
    userId: foundData.userId,
    id,
    title: title ? title : foundData.title,
    body: body ? body : foundData.body,
  };

  const indexAt = postData.findIndex((data) => data.id === Number(id));
  postData.splice(indexAt, 1, updatedData);

  res.status(200).json({
    success: true,
    data: updatedData,
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
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
