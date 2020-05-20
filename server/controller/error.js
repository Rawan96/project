const client = (req, res, next) => {
  res.status(404).json({ message: "page not found" });
};
const server = (err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.msg, status: err.status });
};

module.exports = {
  client,
  server,
};
