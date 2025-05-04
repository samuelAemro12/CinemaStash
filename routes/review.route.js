import express from 'express';
import {
  createReview,
  getReviewsByMovie,
  updateReview,
  deleteReview
} from '../controllers/review.controller.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
// for public route
router.get('/movie/:movieId', getReviewsByMovie);

// for authenticated user
router.post('/', protect, createReview);
router.put('/:id', protect, updateReview);
router.delete('/:id', protect, deleteReview);

export default router;
