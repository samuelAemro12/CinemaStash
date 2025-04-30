import Movie from '../models/movie.model.js';
import { fetchMovieByTitle } from '../services/tmdb.service.js';

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
      genre: [],
      posterUrl: `https://image.tmdb.org/t/p/w500${movieData.poster_path}` || '',
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
