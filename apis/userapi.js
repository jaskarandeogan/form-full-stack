const router = require("express").Router();

const {postUser, getUser, getUsers} = require("../controllers/userController.js");

router.post("/", postUser);
router.get("/", getUsers);
router.get("/:id", getUser);

module.exports = router;