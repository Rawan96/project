const { object, string } = require("yup");

const registerValidation = (req, res, next) => {
  const schema = object().shape({
    name: string().required().min(4),
    email: string().email().required(),
    password: string().required(),
    city: string(),
  });
  schema
    .validate(req.body, { abortEarly: false })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(400).json({ msg: err.errors[0] });
    });
};

const loginValidation = (req, res, next) => {
  const schema = object().shape({
    email: string().email().required(),
    password: string().required(),
  });
  schema
    .validate(req.body, { abortEarly: false })
    .then(() => {
      next();
    })
    .catch((err) => {
      res.status(400).json({ msg: err.errors[0] });
    });
};

module.exports = { registerValidation, loginValidation };
