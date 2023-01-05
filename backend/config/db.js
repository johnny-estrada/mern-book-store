const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;