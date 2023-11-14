import { Router } from 'express';
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controller/event.controller.js';

const router = Router();

router.post("/create-event", createEvent);
router.get("/get-events/:id", getEvents);
router.delete("/delete-event/:id", deleteEvent);
router.put("/update-event/:id", updateEvent);


export default router;