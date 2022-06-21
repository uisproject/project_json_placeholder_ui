const notFoundMiddleware = (req, res, next) => {
  const error = new Error("URI is not found");
  // since this will throwing error this next to errorMiddleware
  res.status(404);
  next(error);
};

const errorMiddleware = (err, req, res, next) => {
  // so if you put something inside the params of next that will be placed at err params
  // you may confused with err.response.status with res.statusCode
  // err.response.status is telling you the status http request
  // while res.statusCode = 200 meaning there is an error

  const statusCode =
    res.statusCode === 200 ? err.response.status : res.statusCode;

  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: err.message,
  });
  next();
};

module.exports = { errorMiddleware, notFoundMiddleware };
