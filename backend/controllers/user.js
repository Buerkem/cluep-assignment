import bcrypt from 'bcrypt';
import { User } from '../db/models/user.js';
import jwt from 'jsonwebtoken';

export async function createUser({ firstName, lastName, email, password }) {

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword
  });

  return await user.save();
}

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Invalid email or password!');
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error('Invalid email or password!');
  }

  // Generate a JWT token
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

  return token;
}