import User from '../models/user.module.js';

const getUser = async (req, res) => {
    try {
        const users = await User.find({}); // Fixed variable name
        res.status(200).json(users);
    } catch (error) {
        console.error('Error retrieving users:', error);
        res.status(500).json({ Message: error.message });
    }
};

export default getUser;