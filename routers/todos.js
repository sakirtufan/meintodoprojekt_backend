const express = require("express");
const { getAllTodos, createTodo,getSingleTodo } = require("../controllers/todo");
const { getAccessToRoute } = require("../middlewares/authorization/auth")

const router = express.Router();

//  /todos

router.get("/", getAllTodos);
router.get("/:id", getSingleTodo);
router.post("/", getAccessToRoute, createTodo);


module.exports = router;
