import User from '../models/user.model.js';


const getUser = async (req, res) => {
    // Handle user retrieval logic here
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({Message: error.message});
    }
}