import Review from '../models/review.model.js';
import Movie from '../models/movie.model.js';
import User from '../models/user.model.js';

export const createReview = async (req, res) => {
  const { userId, movieId, comment, rating } = req.body;

  try {
    const userExists = await User.findById(userId);
    const movieExists = await Movie.findById(movieId);

    if (!userExists || !movieExists) {
      return res.status(404).json({ message: 'User or Movie not found' });
    }

    const review = new Review({ userId, movieId, comment, rating });
    await review.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
};

export const getReviewsByMovie = async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId }).populate('userId', 'username');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving reviews', error: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Error updating review', error: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting review', error: error.message });
  }
};
