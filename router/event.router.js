import { Router } from 'express';
import { createEvent, getEvents } from '../controller/event.controller.js';

const router = Router();

router.post("/create-event", createEvent);
router.get("/get-events/:id", getEvents);


export default router;