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
import { publicLimiter, dataWriteLimiter } from '../middlewares/rateLimitter.js';

const router = express.Router();

// read opps
router.get('/:userId', protect, publicLimiter, getUserWishlist);
router.get('/:userId/count', protect, publicLimiter, getWishlistCount);
router.get('/:userId/recomendations', protect, publicLimiter, getMovieRecommendations);

// write opps
router.post('/', protect, dataWriteLimiter, addToWishlist);
router.put('/:wishlistId', protect, dataWriteLimiter, updateWishlistEntry);
router.delete('/', protect, dataWriteLimiter, removeFromWishlist);
router.delete('/clear/:userId', protect, dataWriteLimiter, clearWishlist);


export default router;
