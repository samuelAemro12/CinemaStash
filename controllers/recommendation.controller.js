import Wishlist from '../models/wishlist.model.js';
import { fetchSimilarMovies } from '../services/tmdb.service.js';

export const getMovieRecommendations = async (req, res) => {
  const { userId } = req.params;

  try {
    const favorites = await Wishlist.find({ userId, favorite: true }).populate('movie');

    if (!favorites.length) {
      return res.status(404).json({ message: 'No favorites found to base recommendations on.' });
    }

    const recommendations = [];

    for (const item of favorites) {
      if (item.movie && item.movie.tmdbId) {
        const similar = await fetchSimilarMovies(item.movie.tmdbId);
        recommendations.push(...similar);
      }
    }

    const unique = Array.from(new Map(recommendations.map(m => [m.id, m])).values());

    res.status(200).json({
      success: true,
      recommendations: unique.slice(0, 20),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
