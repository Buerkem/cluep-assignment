const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true, 
  },
  lastName: {
    type: String,
    required: true,
    trim: true, 
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'], 
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;