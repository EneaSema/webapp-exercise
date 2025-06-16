function notFound(req, res, next) {
  res.status(404).json({
    error: "resource not found",
  });
}

function handlerError(err, req, res, next) {
  res.status(500).json({
    messagge: "internal server error",
    error: error.messagge,
  });
}

module.exports = { notFound, handlerError };
