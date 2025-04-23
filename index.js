import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.js'; 

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/users', async (req, res) => {
    // Handle user creation logic here
   try{
    const user = await User.create(req.body);
    res.status(201).json({Message: 'User created successfully', user });
   }
   catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({Message: error.message});
    }
});
// Connect to MongoDB
mongoose.connect('mongodb+srv://samuelaemrowork12:6yAihjy0iKVaWLcK@cinemastashapi.1ecvscf.mongodb.net/CinemaStashAPI?retryWrites=true&w=majority&appName=CinemaStashAPI',)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));     

  app.listen(3000, () => {    
    console.log('Server is running on port 3000');
  });
