import express from 'express';
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist
} from '../controllers/wishlist.controller.js';

const router = express.Router();

router.post('/', addToWishlist);
router.get('/:userId', getUserWishlist);
router.delete('/', removeFromWishlist);

export default router;
