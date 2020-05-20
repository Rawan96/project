const User = require("../../database/models/users");

const checkEmail = (req, res, next) => {
  const {
    body: { email },
  } = req;
  User.findOne({ email })
    .then((result) => {
      if (!result) {
        next();
      } else {
        const err = new Error();
        err.message = "email already exists!!";
        err.status = 403;
        next(err);
      }
    })

    .catch((err) => {
      next(err);
    });
};

module.exports = { checkEmail };
