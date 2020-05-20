const jwt = require("jsonwebtoken");

const protectedRoute = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.SECRET_KEY, (e, token) => {
    if (e) {
      const err = new Error();
      err.msg = "un-auth";
      err.status = 401;
      next(err);
    } else {
      req.user = token;
      next();
    }
  });
};

module.exports = protectedRoute;
