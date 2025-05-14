import { body, param } from 'express-validator';

export const validateAddToWishlist = [
  body('userId').isMongoId().withMessage('Invalid userId'),
  body('movieId').isMongoId().withMessage('Invalid movieId'),
];

export const validateUpdateWishlistEntry = [
  param('wishlistId').isMongoId().withMessage('Invalid wishlist entry ID'),
  body('rating')
    .optional()
    .isFloat({ min: 0, max: 10 })
    .withMessage('Rating must be between 0 and 10'),
  body('comment')
    .optional()
    .isString()
    .withMessage('Comment must be a string'),
];

export const validateRemoveFromWishlist = [
  param('userId').isMongoId().withMessage('Invalid userId'),
  param('movieId').isMongoId().withMessage('Invalid movieId'),
];

export const handleValidationErrors = async (req, res, next) => {
  const { validationResult } = await import('express-validator');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
