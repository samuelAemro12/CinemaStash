import Movie from '../models/movie.model.js';
import { fetchMovieByTitle, fetchPopularMovies } from '../services/tmdb.service.js';

export const createMovie = async (req, res) => {
  const { title } = req.body;

  try {
    const existing = await Movie.findOne({ title });
    if (existing) return res.status(400).json({ message: 'Movie already exists' });

    const movieData = await fetchMovieByTitle(title);
    if (!movieData) return res.status(404).json({ message: 'Movie not found on TMDB' });

    const newMovie = new Movie({
      title: movieData.title,
      description: movieData.overview || 'No description available.',
      releaseDate: movieData.release_date || new Date(),
      genre: [], // optional: could parse movieData.genre_ids if needed
      posterUrl: movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : '',
    });

    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const fetchPopularMoviesHandler = async (req, res) => {
  try {
    const movies = await fetchPopularMovies();
    res.status(200).json({ success: true, data: movies });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch popular movies', error: error.message });
  }
};

export const fetchMovieByTitleHandler = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Title query parameter is required' });
  }

  try {
    const movie = await fetchMovieByTitle(title);
    if (!movie) {
      return res.status(404).json({ success: false, message: 'Movie not found' });
    }
    res.status(200).json({ success: true, data: movie });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to search movie', error: error.message });
  }
};
