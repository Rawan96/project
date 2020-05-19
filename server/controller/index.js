const { createPost, findOnePost, deletePost, updatePost } = require("./posts");
const { server, client } = require("./error");

module.exports = {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  client,
  server,
};
