const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sportshub';

    // Connect
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected successfully');

    await mongoose.connection.db.collection('users').indexes();
    await mongoose.model('users').syncIndexes();
    console.log('User indexes synced with schema');
    
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); 
  }
};

module.exports = connectToDB;
