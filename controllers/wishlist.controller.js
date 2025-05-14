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
  const {
    page = 1,
    limit = 10,
    search = '',
    watched,
    favorite,
    order = 'desc',
    sortBy = 'createdAt',
  } = req.query;

  const skip = (page - 1) * limit;
  const filter = { userId };

  if (watched !== undefined) {
    filter.watched = watched === 'true';
  }

  if (favorite !== undefined) {
    filter.favorite = favorite === 'true';
  }

  const sortOptions = {};
  const allowedSortFields = ['createdAt', 'rating'];
  if (allowedSortFields.includes(sortBy)) {
    sortOptions[sortBy] = order === 'asc' ? 1 : -1;
  } else if (sortBy === 'title') {
    sortOptions['movieId.title'] = order === 'asc' ? 1 : -1;
  }

  try {
    const wishlist = await Wishlist.find(filter)
      .populate({
        path: 'movieId',
        match: search ? { title: { $regex: new RegExp(search, 'i') } } : {},
      })
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit))
      .exec();

    const filteredWishlist = wishlist.filter((item) => item.movieId !== null);
    const total = await Wishlist.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      success: true,
      data: filteredWishlist,
      page: Number(page),
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  const { userId, movieId } = req.params;

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

export const clearWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    await Wishlist.deleteMany({ userId });
    res.status(200).json({ message: 'Wishlist cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getWishlistCount = async (req, res) => {
  const { userId } = req.params;

  try {
    const count = await Wishlist.countDocuments({ userId });
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateWishlistEntry = async (req, res) => {
  const { wishlistId } = req.params;
  const { comment, rating, watched, favorite } = req.body;
  const userId = req.user._id;

  try {
    const entry = await Wishlist.findById(wishlistId);

    if (!entry) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }

    if (entry.userId.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this wishlist item' });
    }

    if (comment !== undefined) entry.comment = comment;
    if (rating !== undefined) entry.rating = rating;
    if (watched !== undefined) entry.watched = watched;
    if (favorite !== undefined) entry.favorite = favorite;

    const updatedEntry = await entry.save();

    res.status(200).json({
      success: true,
      message: 'Wishlist entry updated successfully',
      data: updatedEntry,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
