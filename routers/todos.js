const express = require("express");
const { getAllTodos, createTodo } = require("../controllers/todo");
const { getAccessToRoute } = require("../middlewares/authorization/auth")

const router = express.Router();

//  /todos

router.get("/", getAllTodos);
router.post("/", getAccessToRoute, createTodo);


module.exports = router;
