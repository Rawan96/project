const User = require("../../database/models/users");

const checkEmail = async (req, res, next) => {
  const {
    body: { email },
  } = req;
  const result = await User.findOne({ email });
  if (!result) {
    next();
  } else {
    const err = new Error();
    err.msg = "email already exists!!";
    err.status = 403;
    next(err);
  }
};

module.exports = { checkEmail };
