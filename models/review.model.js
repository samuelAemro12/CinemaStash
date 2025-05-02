import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  comment: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  }
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);
export default Review;
