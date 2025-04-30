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
  