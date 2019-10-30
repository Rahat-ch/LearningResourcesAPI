const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (error, req, res, next) => {
  let err = { ...error };
  err.message = error.message;
  //Log to console for dev
  console.log(error.stack);

  //Mongoose bad ObjectID
  if (error.name === "CastError") {
    const message = `The learning resource with ID of ${error.value} was not found`;
    err = new ErrorResponse(message, 404);
  }

  //Mongoose duplicate entry
  if (error.code === 11000) {
    const message =
      "Hold on there,,,looks there is a duplicate field value here!";
    err = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (error.name === "ValidationError") {
    const message = Object.values(error.errors).map(val => val.message);
    err = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || `Server Error`
  });
};

module.exports = errorHandler;
