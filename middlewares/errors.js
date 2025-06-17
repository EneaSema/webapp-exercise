function notFound(req, res, next) {
  res.status(404).json({
    error: "Resource not found",
  });
}

function handlerError(err, req, res, next) {
  const data = {
    messagge: err.messagge,
  };

  if (process.env.DEBUG_MODE === "true") {
    data.error = err.messagge;
  }
  console.error(data);
  res.status(500).json(data);
}

module.exports = { notFound, handlerError };
