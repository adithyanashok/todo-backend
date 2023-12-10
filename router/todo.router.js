import { Router } from 'express';
import { addATodo, deleteTodos, doneTodo, getDoneTodos, getTodos } from '../controller/todo.controller.js';

const router = Router();

router.post("/add-todo", addATodo);
router.post("/done-todo", doneTodo);
router.get("/get-todo/:id/:datestring", getTodos);
router.get("/get-donetodo/:id", getDoneTodos);
router.delete("/delete-todo/:id", deleteTodos);

export default router;