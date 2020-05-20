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

const {
  protectedRoute,
  checkEmail,
  registerValidation,
  loginValidation,
} = require("../middleware");

// Post Routes
// Create a new post
router.post("/", protectedRoute, createPost);

// Find a single post with id
router.get("/:id", protectedRoute, findOnePost);

// Delete a post with id
router.delete("/:id", protectedRoute, deletePost);

// Update a post with id
router.put("/:id", protectedRoute, updatePost);

//User Routes
//

module.exports = router;
