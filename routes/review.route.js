import express from 'express';
import {
  createReview,
  getReviewsByMovie,
  updateReview,
  deleteReview
} from '../controllers/review.controller.js';

const router = express.Router();

router.post('/', createReview);
router.get('/movie/:movieId', getReviewsByMovie);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

export default router;
