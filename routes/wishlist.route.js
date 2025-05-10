import express from 'express';
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
  updateWishlistEntry,
  getWishlistCount,
  clearWishlist,
} from '../controllers/wishlist.controller.js';
import { protect } from '../middlewares/authMiddleware.js';
import { getMovieRecommendations } from '../controllers/recommendation.controller.js';

const router = express.Router();

router.post('/', protect, addToWishlist);
router.get('/:userId', protect, getUserWishlist);
router.delete('/', protect, removeFromWishlist);
router.patch('/:wishlistId', updateWishlistEntry);
router.get('/:userId/count', getWishlistCount);
router.delete('/:userId/clear', clearWishlist);
router.get('/:userId/recomendations', getMovieRecommendations);


export default router;
