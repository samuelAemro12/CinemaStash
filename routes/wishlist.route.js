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
import {
  validateAddToWishlist,
  validateUpdateWishlistEntry,
  validateRemoveFromWishlist,
  handleValidationErrors,
} from '../validators/wishlist.validator.js';

const router = express.Router();

router.get('/:userId', protect, publicLimiter, getUserWishlist);
router.get('/:userId/count', protect, publicLimiter, getWishlistCount);
router.get('/:userId/recomendations', protect, publicLimiter, getMovieRecommendations);

router.post(
  '/',
  protect,
  dataWriteLimiter,
  validateAddToWishlist,
  handleValidationErrors,
  addToWishlist
);

router.put(
  '/:wishlistId',
  protect,
  validateUpdateWishlistEntry,
  handleValidationErrors,
  dataWriteLimiter,
  updateWishlistEntry
);

router.delete(
  '/:userId/:movieId',
  protect,
  dataWriteLimiter,
  validateRemoveFromWishlist,
  handleValidationErrors,
  removeFromWishlist
);

router.delete('/clear/:userId', protect, dataWriteLimiter, clearWishlist);

export default router;
