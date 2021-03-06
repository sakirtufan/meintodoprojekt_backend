const express = require("express");
const { getAllTodos, createTodo,getSingleTodo,editTodo,deleteSingleTodo,deleteAllTodos } = require("../controllers/todo");
const { getAccessToRoute,getTodoOwnerAccess } = require("../middlewares/authorization/auth")

const router = express.Router();

//  /todos

router.get("/", getAllTodos);
router.get("/:id", getSingleTodo);
router.post("/", getAccessToRoute, createTodo);
router.put("/:id/edit", [getAccessToRoute, getTodoOwnerAccess], editTodo);
router.delete("/:id/delete",[getAccessToRoute, getTodoOwnerAccess],deleteSingleTodo);
router.delete("/", getAccessToRoute, deleteAllTodos);

module.exports = router;
