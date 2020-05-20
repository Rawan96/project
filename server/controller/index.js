const {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  getPostsByTitle,
} = require("./post/posts");

const { server, client } = require("./error");
const { register, login, logout, getAllUsers, deleteAllUsers} = require("./users");

module.exports = {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  getPostsByTitle,
  client,
  server,
  register,
  login, 
  logout, 
  getAllUsers, 
  deleteAllUsers
};
