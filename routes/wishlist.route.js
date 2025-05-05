import express from 'express';
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist
} from '../controllers/wishlist.controller.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// All wishlist routes require authentication
router.post('/', protect, addToWishlist);
router.get('/:userId', protect, getUserWishlist);
router.delete('/', protect, removeFromWishlist);

export default router;
