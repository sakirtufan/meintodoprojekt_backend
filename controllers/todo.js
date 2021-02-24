const Todo = require("../models/Todo") 
const CustomError = require("../helpers/error/CustomError")
const asyncErrorWrapper = require("express-async-handler")

const getAllTodos = asyncErrorWrapper(async(req, res, next) => {
  const todos = await Todo.find();
  return res.status(200).json({
    success: true,
    data: todos
  });
})

const getSingleTodo = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.status(200).json({
    success: true,
    data: todo
  })
})

const createTodo = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;  

  const todo = await Todo.create({
    content: information.content,
    user: req.user.id
  })

  res.status(200).json({
    success: true,
    data: todo
  })

});

const editTodo = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  let todo = await Todo.findById(id);

  todo.content = content;
  
  todo = await todo.save();

  return res.status(200).json({
    success: true,
    data: todo
  })
})

const deleteSingleTodo = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);  

  return res.status(200).json({
    success: true,
    message: "Todo deleted successfully"
  })
})

const deleteAllTodos = asyncErrorWrapper(async (req, res, next) => {
  await Todo.deleteMany();

  return res.status(200).json({
    success: true,
    message: "All Todos deleted successfully"
  })
})


module.exports = {
  getAllTodos,
  getSingleTodo,
  createTodo,
  editTodo,
  deleteSingleTodo,
  deleteAllTodos
}