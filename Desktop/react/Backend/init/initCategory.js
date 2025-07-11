const mongoose = require('mongoose');
const Category = require("../Models/category");

async function initCategories() {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders', {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });

      // Delete existing categories if necessary
      await Category.deleteMany({});

      // Define initial categories
      const categoriesList = [
          { _id: new mongoose.Types.ObjectId(), name: 'Wallets' },
          { _id: new mongoose.Types.ObjectId(), name: 'Clothing' },
          { _id: new mongoose.Types.ObjectId(), name: 'Footwear' },
          { _id: new mongoose.Types.ObjectId(), name: 'Accessories' },
      ];

      // Insert categories into the database
      await Category.insertMany(categoriesList);
      console.log("Categories data initialized");
  } catch (err) {
      console.error('Error:', err);
  } finally {
      mongoose.connection.close();
  }
}

module.exports = initCategories;