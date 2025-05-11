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
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id/stats', getUserProfileStats);

export default router;
