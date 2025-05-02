import Wishlist from '../models/wishlist.model.js';
import Movie from '../models/movie.model.js';
import User from '../models/user.model.js';

export const addToWishlist = async (req, res) => {
  const { userId, movieId } = req.body;

  try {

    const user = await User.findById(userId);
    const movie = await Movie.findById(movieId);

    if (!user || !movie) {
      return res.status(404).json({ message: 'User or Movie not found' });
    }

    const existing = await Wishlist.findOne({ userId, movieId });
    if (existing) {
      return res.status(400).json({ message: 'Movie already in wishlist' });
    }

    const wishlistItem = new Wishlist({ userId, movieId });
    await wishlistItem.save();

    res.status(201).json({ message: 'Movie added to wishlist', wishlistItem });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getUserWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.find({ userId }).populate('movieId');
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  const { userId, movieId } = req.body;

  try {
    const deleted = await Wishlist.findOneAndDelete({ userId, movieId });

    if (!deleted) {
      return res.status(404).json({ message: 'Movie not found in wishlist' });
    }

    res.status(200).json({ message: 'Movie removed from wishlist' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
