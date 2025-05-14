import { body, param, query, validationResult } from 'express-validator';

export const validateCreateMovie = [
  body('title').isString().notEmpty().withMessage('Title is required'),
];

export const validateUpdateMovie = [
  param('movieId').isMongoId().withMessage('Invalid movie ID'),
  body('title').optional().isString().withMessage('Title must be a string'),
  body('releaseDate').optional().isISO8601().withMessage('Invalid release date'),
  body('genres').optional().isArray().withMessage('Genres must be an array'),
  body('posterPath').optional().isURL().withMessage('Poster must be a valid URL'),
];

export const validateMovieIdParam = [
  param('movieId').isMongoId().withMessage('Invalid movie ID'),
];

export const validateMovieSearchQuery = [
  query('title').isString().notEmpty().withMessage('Title query parameter is required'),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
