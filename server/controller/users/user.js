const User = require("../../database/models/users");

const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      if (!users) return res.status(404).send({ message: "There is no users" });
      else res.send(users);
    })

    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error happened while you get all the users" });
    });
};

const deleteAllUsers = (req, res) => {
  User.deleteMany({})
    .then((users) => {
      if (!users) {
        const err = new Error();
        err.msg = "Error happened while you are deleting";
        err.status = 500;
        throw err;
      }
      res.status(200).json({ data: "You deleted all the users" });
    })

    .catch((err) => {
      res.status(500).send({ message: "Server Error" });
    });
};

module.exports = { getAllUsers, deleteAllUsers };
