const Users = require("../models/users");

const userQueries = {};

userQueries.createUser = ({ name, email, password, city }) => {
  return Users.create({ name, email, password, city });
};

userQueries.findAll = () => {
  return Users.find();
};

userQueries.findOne = (email) => {
  return Users.findOne({ email });
};

userQueries.deleteAll = () => {
  return Users.deleteMany({});
};

module.exports = userQueries;
