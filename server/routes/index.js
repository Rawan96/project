const router = require("express").Router();

const {
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
  deleteAllUsers,
} = require("../controller");

// Post Routes
// Create a new post
router.post("/", createPost);

// Find a single post with id
router.get("/:id", findOnePost);

// Delete a post with id
router.delete("/:id", deletePost);

// Update a post with id
router.put("/:id", updatePost);

//User Routes
//

module.exports = router;
