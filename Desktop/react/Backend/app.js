const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api', categoryRoutes);



// Start server
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
