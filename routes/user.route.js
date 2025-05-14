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
import { validateUserCreation, validateUserUpdate } from '../validators/user.validator.js';
import { validateRequest } from '../middlewares/validateRequest.js'; 

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', protect, profileLimiter, getUser);
router.post('/', protect, validateUserCreation, validateRequest, createUser);
router.put('/:id', protect, validateUserUpdate, validateRequest, updateUser);
router.delete('/:id', protect, deleteUser);
router.get('/:id/stats', protect, profileLimiter, getUserProfileStats);

export default router;