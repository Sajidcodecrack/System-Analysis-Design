const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('BMI and Meal Suggestion API is running');
});

// Import routes
const bmiRoutes = require('./routes/bmi');
const mealRoutes = require('./routes/meal');

// Use routes
app.use('/api/bmi', bmiRoutes);
app.use('/api/meal', mealRoutes);

// Set port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
