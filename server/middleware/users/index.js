const protectedRoute = require("./protectedRoute");
const { checkEmail } = require("./checkEmail");
const { registerValidation, loginValidation } = require("./validation");

module.exports = {
  protectedRoute,
  checkEmail,
  registerValidation,
  loginValidation,
};
