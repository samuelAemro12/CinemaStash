import express from 'express';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserProfileStats
} from '../controllers/user.controller.js';
import { protect } from '../middlewares/authMiddleware.js';
import { profileLimiter } from '../middlewares/rateLimitter.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', protect, profileLimiter, getUser);
router.post('/', protect, createUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);
router.get('/:id/stats', protect, profileLimiter, getUserProfileStats);

export default router;
