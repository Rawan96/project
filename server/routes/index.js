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
  getAllBlogs,
} = require("../controller");

const {
  protectedRoute,
  checkEmail,
  registerValidation,
  loginValidation,
} = require("../middleware");

// Post Routes

//get all posts
//router.get("/", getAllBlogs);

// Create a new post
router.post("/post", protectedRoute, createPost);

// Find a single post with id
router.get("/:id", findOnePost);

// Delete a post with id
router.delete("/:id", protectedRoute, deletePost);

// Update a post with id
router.put("/:id", protectedRoute, updatePost);

//Get Post by it's title
router.get("/post/:search", getPostsByTitle);

//User Routes
//get all users
router.get("/users", getAllUsers);

//delete all users
router.delete("/users", deleteAllUsers);

//register user
router.post("/register", registerValidation, checkEmail, register);

//login user
router.post("/login", loginValidation, login);

//logout user
router.get("/logout", logout);

module.exports = router;
