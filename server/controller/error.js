const client = (req, res, next) => {
  res.status(404).json({ msg: "page not found" });
};
const server = (err, req, res, next) => {
  res.status(err.status || 500).json({ msg: err.msg, status: err.status });
};

module.exports = {
  client,
  server,
};
