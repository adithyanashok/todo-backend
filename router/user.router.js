import { Router } from 'express';
import { register, signin } from '../controller/user.controller.js';

const router = Router();

router.post("/register", register);
router.post("/login", signin);

export default router;