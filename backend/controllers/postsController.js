const asyncHandler = require("express-async-handler");
const _ = require("lodash");

const { postData, userData } = require("../data/data");
const { pagination } = require("../utils/pagination");

const getPosts = asyncHandler(async (req, res) => {
  const { limit, page } = req.query;

  const result = pagination(limit, page, postData);

  // combine with userData
  const combinedWithUser = result.data
    .map((data) => {
      const findUser = userData.find((user) => user.id === data.userId);
      findUser.userId = findUser.id;

      const post = {
        postId: data.id,
        title: data.title,
        body: data.body,
      };

      return { ...findUser, ...post };
    })
    .map((item) => {
      delete item.id;
      delete item.address.geo;
      return item;
    });

  res.status(200).json({
    success: true,
    ...result,
    data: [...combinedWithUser],
  });
});

const getDetailPost = asyncHandler(async (req, res) => {
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
  const getLastId = postData.at(-1).id;

  const newData = {
    id: getLastId + 1,
    ...body,
  };

  postData.push(newData);

  res.status(200).json({
    success: true,
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
  getDetailPost,
  createPost,
  updatePost,
  deletePost,
};
