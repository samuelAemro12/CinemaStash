import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

// Register
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: 'Email already in use' });

    const newUser = await User.create({ username, email, password });
    const token = generateToken(newUser._id);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: 'Invalid email or password' });

    const token = generateToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
