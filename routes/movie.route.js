import express from 'express';
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controller.js';
import { fetchMovieByTitleHandler, fetchPopularMoviesHandler } from '../controllers/movie.controller.js';   
import { publicLimiter } from '../middlewares/rateLimitter.js';
const router = express.Router();

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', createMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);
router.get('/popular', publicLimiter, fetchPopularMoviesHandler);
router.get('/search', publicLimiter, fetchMovieByTitleHandler);

export default router;
