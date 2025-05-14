import User from '../models/user.model.js';
import Wishlist from '../models/wishlist.model.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('username createdAt'); 
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch users', error: error.message });
  }
};


export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully', user });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: error.message });
  }
};

export const getUserProfileStats = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const wishlistItems = await Wishlist.find({ userId });

    const totalMovies = wishlistItems.length;
    const watchedCount = wishlistItems.filter(item => item.watched).length;
    const favoriteCount = wishlistItems.filter(item => item.favorite).length;
    const ratedItems = wishlistItems.filter(item => typeof item.rating === 'number');
    const averageRating =
      ratedItems.length > 0
        ? (ratedItems.reduce((sum, item) => sum + item.rating, 0) / ratedItems.length).toFixed(2)
        : null;

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      stats: {
        totalMovies,
        watchedCount,
        favoriteCount,
        averageRating,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
