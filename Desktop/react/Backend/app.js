const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');
const initCategories = require('./init/initCategory');
const initProducts = require('./init/initProductsData');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const port = 8080;


async function startServer() {
  try {
      // Initialize database
      await initCategories();
      await initProducts();

      // Connect to MongoDB
      await mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');

      // Set up routes
      app.use('/api', categoryRoutes);

      // Start server
      app.listen(port, () => {
          console.log(`Server is listening on port ${port}`);
      });
  } catch (error) {
      console.error('Error initializing database or starting server:', error);
      process.exit(1); // Exit process with failure code
  }
}

startServer();
