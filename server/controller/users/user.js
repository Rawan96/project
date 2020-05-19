const User = require("../../database/models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.json({ msg: "There is no users" });
    res.json({ users });
  } catch (err) {
    console.log(err);
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const users = await User.deleteMany({});
    if (!users) {
      const err = new Error();
      err.msg = "Error happened when you are deleting";
      err.status = 500;
      throw err;
    }
    res.status(200).json({ data: "You deleted all the users" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllUsers, deleteAllUsers };
