import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

wishlistSchema.index({ userId: 1, movieId: 1 }, { unique: true }); // Prevent duplicates

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
export default Wishlist;
