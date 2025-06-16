function notFound(req, res, next) {
  res.status(404).json({
    error: "resource not found",
  });
}

function handlerError(err, req, res, next) {
  const data = {
    messagge: "internal server error",
  };

  if (process.env.DEBUG_MODE === "true") {
    data.error = err.messagge;
  }
  res.status(500).json(data);
}

module.exports = { notFound, handlerError };
