import express from 'express';
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  fetchPopularMoviesHandler,
  fetchMovieByTitleHandler,
  getMovieTrailerHandler,
} from '../controllers/movie.controller.js';

import {
  validateCreateMovie,
  validateUpdateMovie,
  validateMovieIdParam,
  validateMovieSearchQuery,
  handleValidationErrors,
} from '../validators/movie.validator.js';

import { publicLimiter } from '../middlewares/rateLimitter.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getMovies);
router.get('/popular', publicLimiter, fetchPopularMoviesHandler);
router.get('/search', publicLimiter, validateMovieSearchQuery, handleValidationErrors, fetchMovieByTitleHandler);
router.get('/:movieId', validateMovieIdParam, handleValidationErrors, getMovie);
router.get('/:movieId/trailer', validateMovieIdParam, handleValidationErrors, publicLimiter, getMovieTrailerHandler);
router.post('/', protect, validateCreateMovie, handleValidationErrors, createMovie);
router.put('/:movieId', protect, validateUpdateMovie, handleValidationErrors, updateMovie);
router.delete('/:movieId', protect, validateMovieIdParam, handleValidationErrors, deleteMovie);

export default router;
