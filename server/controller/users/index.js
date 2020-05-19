const { register, login, logout } = require("./authentication");
const { getAllUsers, deleteAllUsers } = require("./user");

module.exports = { register, login, logout, getAllUsers, deleteAllUsers };
