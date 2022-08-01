const router = require("express").Router();

const userRouter = require("./userapi");

router.use("/users", userRouter);

module.exports = router;
