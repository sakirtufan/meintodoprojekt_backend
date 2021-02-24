const express = require("express");
const { getAllTodos, createTodo,getSingleTodo,editTodo } = require("../controllers/todo");
const { getAccessToRoute,getTodoOwnerAccess } = require("../middlewares/authorization/auth")

const router = express.Router();

//  /todos

router.get("/", getAllTodos);
router.get("/:id", getSingleTodo);
router.post("/", getAccessToRoute, createTodo);
router.put("/:id/edit",[getAccessToRoute,getTodoOwnerAccess],editTodo);


module.exports = router;
