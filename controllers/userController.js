const User = require("../models/User.js");

const postUser = (req, res) => {
  let newUser = new User({
    name: req.body.name,
    gender: req.body.gender,
    age: req.body.age,
    status: req.body.status,
  });

  newUser
    .save()
    .then((result) => {
      res.json({
        data: newUser,
        url: `/api/users/${newUser._id}`,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUsers = (req, res) => {
  User.find({})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).send(error));
};

const getUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => res.status(500).send(error));
};

module.exports = { postUser, getUsers, getUser };
