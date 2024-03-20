import express from "express";

import { getAllTodos, addTodo, singleTodo, deleteTodo } from "../controllers/todoControllers";

const router = express.Router(); //create variable, handle routing

// localhost:8000/todos/ GET, POST
router.route("/").get(getAllTodos).post(addTodo);

// localhost:8000/todos/:id
router.route("/:id").get(singleTodo);

// localhost:8000/todos/:id
router.route("/:id").delete(deleteTodo);

export default router;