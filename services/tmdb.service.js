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
  
      return response.data.results; // An array of movie objects
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
        },
      });
      return response.data.results[0]; // Return the first result
    } catch (error) {
      console.error('Error fetching movie by title from TMDB:', error.message);
      throw error;
    }
  };
  