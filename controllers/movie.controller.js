import Movie from '../models/movie.model.js';
import {
  fetchMovieByTitle,
  fetchPopularMovies,
  fetchMovieTrailer,
} from '../services/tmdb.service.js';

export const createMovie = async (req, res) => {
  const { title } = req.body;

  try {
    const existing = await Movie.findOne({ title });
    if (existing) {
      return res.status(400).json({ message: 'Movie already exists' });
    }

    const movieData = await fetchMovieByTitle(title);
    if (!movieData) {
      return res.status(404).json({ message: 'Movie not found on TMDB' });
    }

    const newMovie = new Movie({
      title: movieData.title,
      description: movieData.overview || 'No description available.',
      releaseDate: movieData.release_date || new Date(),
      genres: movieData.genre_ids || [],
      posterUrl: movieData.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
        : '',
    });

    await newMovie.save();
    res.status(201).json({ success: true, data: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({ success: true, data: movies });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getMovie = async (req, res) => {
  const { movieId } = req.params;

  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ success: true, data: movie });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { movieId } = req.params;

  try {
    const updated = await Movie.findByIdAndUpdate(movieId, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  const { movieId } = req.params;

  try {
    const deleted = await Movie.findByIdAndDelete(movieId);
    if (!deleted) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json({ success: true, message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const fetchPopularMoviesHandler = async (req, res) => {
  try {
    const movies = await fetchPopularMovies();
    res.status(200).json({ success: true, data: movies });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch popular movies',
      error: error.message,
    });
  }
};

export const fetchMovieByTitleHandler = async (req, res) => {
  const { title } = req.query;

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

export const getMovieTrailerHandler = async (req, res) => {
  const { movieId } = req.params;

  try {
    const trailer = await fetchMovieTrailer(movieId);
    if (!trailer) {
      return res.status(404).json({ success: false, message: 'No trailer found' });
    }

    res.status(200).json({
      success: true,
      trailer: {
        name: trailer.name,
        key: trailer.key,
        site: trailer.site,
        url: `https://www.youtube.com/watch?v=${trailer.key}`,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch trailer', error: error.message });
  }
};
