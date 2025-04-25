import express from 'express';

import User  from '../models/user.model.js';
import getUser  from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({Message: error.message});
    }
});

export default router;