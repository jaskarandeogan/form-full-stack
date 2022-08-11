const express = require("express");
const connected = require("./connectionDB.js");
const app = express();


const server = app.listen(8080, () => {
  console.log("listening");
});
connected.once("open", () => {
  console.log("db connected");
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./apis/index.js");
app.use("/api", router);


