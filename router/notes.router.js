import { Router } from 'express';
import { addNote, deleteNote, editNote, getNote } from '../controller/notes.controller.js';

const router = Router();

router.post("/add-note", addNote);
router.put("/edit-note/:id", editNote);
router.get("/get-note/:id", getNote);
router.delete("/delete-note/:id", deleteNote);

export default router;