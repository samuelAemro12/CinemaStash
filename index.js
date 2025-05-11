import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import movieRouter from './routes/movie.route.js';
import wishlistRouter from './routes/wishlist.route.js';
import reviewRouter from './routes/review.route.js';
import authRouter from './routes/auth.route.js';
import dotenv from 'dotenv';
import { publicLimiter } from './middlewares/rateLimitter.js';


const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(publicLimiter);


// Routes
app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/wishlist', wishlistRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/auth', authRouter);

// Root route
app.get('/', (req, res) => {
  res.send('CinemaStash API is live');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
