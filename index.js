import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.module.js'; 
import userRouter from './routes/user.route.js';

const app = express();

// middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// routes
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/users', async (req, res) => {
    // Handle user retrieval logic here
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({Message: error.message});
    }
});

app.get('/api/users/:id', async (req, res) => {
    // Handle user retrieval by ID logic here
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({Message: 'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({Message: error.message});
    }
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

app.put('/api/users/:id', async (req, res) => {
    // Handle user update logic here
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({Message: 'User not found'});
        } 
        const updatedUser = await User.findById(req.params.id);
        res.status(200).json({Message: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({Message: error.message});
    }
});

app.delete('/api/users/:id', async (req, res) =>{
    // handle user deletion logic here
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({Message: 'User not found'});
        } 
        
        res.status(200).json({Message: 'User deleted successfully', user });
    } catch (error) {
        console.error('Error deleting user:', error);
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
