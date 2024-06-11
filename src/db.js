const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
  // models/SearchHistory.js
const mongoose = require('mongoose');

const SearchHistorySchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  country: String,
  temp: String,
  condition: String,
  icon: String,
  conditionText: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SearchHistory', SearchHistorySchema);
