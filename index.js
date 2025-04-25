import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB connection
mongoose.connect('mongodb+srv://samuelaemrowork12:6yAihjy0iKVaWLcK@cinemastashapi.1ecvscf.mongodb.net/CinemaStashAPI?retryWrites=true&w=majority&appName=CinemaStashAPI')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
