const axios = require("axios");
const { JSON_PLACEHOLDER_BASE_URI } = require("../utils/api");

const postData = [];
const commentData = [];
const albumData = [];
const photoData = [];
const todoData = [];
const userData = [];

const fetchData = async () => {
  const posts = axios.get(`${JSON_PLACEHOLDER_BASE_URI}/posts`);
  const comments = axios.get(`${JSON_PLACEHOLDER_BASE_URI}/comments`);
  const albums = axios.get(`${JSON_PLACEHOLDER_BASE_URI}/albums`);
  const photos = axios.get(`${JSON_PLACEHOLDER_BASE_URI}/photos`);
  const todos = axios.get(`${JSON_PLACEHOLDER_BASE_URI}/todos`);
  const users = axios.get(`${JSON_PLACEHOLDER_BASE_URI}/users`);

  axios.all([posts, comments, albums, photos, todos, users]).then(
    axios.spread((...response) => {
      const posts = response[0].data;
      const comments = response[1].data;
      const albums = response[2].data;
      const photos = response[3].data;
      const todos = response[4].data;
      const users = response[5].data;

      postData.push(...posts);
      commentData.push(...comments);
      albumData.push(...albums);
      photoData.push(...photos);
      todoData.push(...todos);
      userData.push(...users);
    })
  );
};

module.exports = {
  postData,
  commentData,
  albumData,
  photoData,
  todoData,
  userData,
  fetchData,
};
