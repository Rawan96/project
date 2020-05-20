const User = require("../models/users");

const userQueries = {};

userQueries.createUser = ({ name, email, password }) => {
  return User.create({ name, email, password });
};

userQueries.findAll = () => {
  return User.find();
};

userQueries.findOne = (email) => {
  return User.findOne({ email });
};

userQueries.deleteAll = () => {
  return User.deleteMany({});
};

module.exports = userQueries;
