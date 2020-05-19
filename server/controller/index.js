const {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  getPostsByTitle,
} = require("./post/posts");

const { server, client } = require("./error");

module.exports = {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  getPostsByTitle,
  client,
  server,
};
