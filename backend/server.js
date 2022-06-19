const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

const server = express();

dotenv.config();

server.use(express.json());

server.get("/", async (req, res) => {
  const fetchComments = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  console.log(fetchComments.data);

  res.json(fetchComments.data);
});

const PORT = process.env.SERVER_PORT;

server.listen(PORT || 6000, () => {
  console.log(`Listening to PORT ${PORT}`);
});
