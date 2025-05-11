import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { authLimiter } from '../middlewares/rateLimitter.js';

const router = express.Router();

router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);

export default router;
