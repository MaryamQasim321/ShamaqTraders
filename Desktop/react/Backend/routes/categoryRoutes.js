const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../Models/category');
const Product = require('../Models/products');

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Error fetching categories' });
  }
});

// Get a category by ID
router.get('/categories/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error('Error fetching category:', error);
    res.status(500).json({ message: 'Error fetching category' });
  }
});

// Get products by category ID
router.get('/products', async (req, res) => {
    const { categoryId } = req.query;
  
    // Validate categoryId
    if (!categoryId) {
      return res.status(400).json({ message: 'Category ID is required' });
    }
    
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }
  
    try {
      const products = await Product.find({ categoryId: mongoose.Types.ObjectId(categoryId) });
  
      if (products.length === 0) {
        return res.status(404).json({ message: 'No products found for this category' });
      }
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Error fetching products' });
    }
  });
  
module.exports = router;
