const router = require("express").Router();

const {
  createPost,
  findOnePost,
  deletePost,
  updatePost,
  getPostsByTitle,
  register,
  login,
  logout,
  getAllUsers,
  deleteAllUsers,
  getAllPosts,
} = require("../controller");

const {
  protectedRoute,
  checkEmail,
  registerValidation,
  loginValidation,
} = require("../middleware");

// Post Routes

//get all posts
router.get("/post", getAllPosts);

// Create a new post
router.post("/post", createPost);

// Find a single post with id
router.get("/post/id", findOnePost);

// Delete a post with id
router.delete("/post/id", protectedRoute, deletePost);

// Update a post with id
router.put("/post/id", protectedRoute, updatePost);

//Get Post by it's title
router.get("/post/:search", getPostsByTitle);

//User Routes
//get all users
router.get("/user", getAllUsers);

//delete all users
router.delete("/users", deleteAllUsers);

//register user
router.post("/register", registerValidation, checkEmail, register);

//login user
router.post("/login", loginValidation, login);

//logout user
router.get("/logout", logout);

module.exports = router;
