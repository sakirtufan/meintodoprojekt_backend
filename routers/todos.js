const express = require("express");
const { getAllTodos } = require("../controllers/todo");

const router = express.Router();

//  /todos

router.get("/", getAllTodos);



module.exports = router;
