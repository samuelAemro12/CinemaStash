import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
        },
      });
  
      return response.data.results; 
    } catch (error) {
      console.error('Error fetching popular movies from TMDB:', error.message);
      throw error;
    }
  };

export const fetchMovieByTitle = async (title) => {
    try {
      const response = await axios.get(`${BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: title,
          language: 'en-US',
        },
      });
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching movie by title from TMDB:', error.message);
      throw error;
    }
  };

  export const fetchSimilarMovies = async (movieId) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
        },
      });
      return response.data.results; 
    }
    catch (error) {
      console.error('Error fetching similar movies from TMDB:', error.message);
      throw error;
    }
  };

export const fetchMovieTrailer = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    const trailers = response.data.results.filter(
      (video) =>
        video.site === 'YouTube' &&
        video.type === 'Trailer'
    );

    return trailers.length > 0 ? trailers[0] : null;
  } catch (error) {
    console.error('Error fetching trailer:', error.message);
    throw error;
  }
};
