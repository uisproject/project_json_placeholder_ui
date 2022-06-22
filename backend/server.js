const express = require("express");
const dotenv = require("dotenv");

const {
  errorMiddleware,
  notFoundMiddleware,
} = require("./middleware/customErrorMiddleware");
const { postData, fetchData } = require("./data/data");
const router = require("./routers/routes");

dotenv.config();
const server = express();

server.use(express.json());

// import all data from json placeholder, since I don't use any database
fetchData().then(() => {
  server.use(router); // stores all routes
  server.use([notFoundMiddleware, errorMiddleware]); // applying custom middlewares
});

const PORT = process.env.SERVER_PORT;

server.listen(PORT || 6000, () => {
  console.log(`Listening to PORT ${PORT}`);
});
