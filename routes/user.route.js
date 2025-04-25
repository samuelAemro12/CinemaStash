import express from 'express';
import router from express.Router();
import { User } from '../models/user.model.js';


router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({Message: error.message});
    }
});