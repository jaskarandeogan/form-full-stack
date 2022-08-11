const router = require("express").Router();

const {postUser, getUser, getUsers, updateUser, deleteUser} = require("../controllers/userController.js");

router.post("/", postUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;