const mongoose = require('mongoose');

const connectToDB = async () => {
  try {

    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/JTM';

    await mongoose.connect(mongoURI);

    console.log('MongoDB connected successfully');

    const User = mongoose.model('users');
    await User.syncIndexes();
    console.log('User indexes synced with schema');

  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
