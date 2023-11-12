import { Router } from 'express';
import { addATodo, deleteTodos, getTodos } from '../controller/todo.controller.js';

const router = Router();

router.post("/add-todo", addATodo);
router.get("/get-todo/:id", getTodos);
router.delete("/delete-todo/:id", deleteTodos);

export default router;