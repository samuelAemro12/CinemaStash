import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  tmdbId: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  trialerUrl: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: 'No description available',
  },
  overview: {
    type: String
  },
  releaseDate: {
    type: Date,
    required: true
  },
  genre: {
    type: [String],
    default: []
  },
  posterUrl: {
    type: String,
    default: ''
  },
  posterPath: {
    type: String 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
