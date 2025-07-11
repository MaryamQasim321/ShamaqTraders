const mongoose = require('mongoose');
const Product = require('../Models/products'); // Adjust path as necessary
const Category = require('../Models/category'); // Adjust path as necessary

async function initProducts() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Delete existing products
        await Product.deleteMany({});

        // Fetch categories to get their ObjectIds
        const categories = await Category.find();

        if (!categories.length) {
            throw new Error('No categories found. Please ensure categories are inserted before adding products.');
        }

        // Map category names to ObjectIds
        const categoryMap = categories.reduce((acc, category) => {
            acc[category.name] = category._id;
            return acc;
        }, {});

        // Check for missing categories
        const requiredCategories = ['Wallets', 'Clothing', 'Footwear', 'Accessories'];
        for (const cat of requiredCategories) {
            if (!categoryMap[cat]) {
                throw new Error(`Category '${cat}' not found in database.`);
            }
        }

        // Define products
        const products = [
            { _id: new mongoose.Types.ObjectId(), categoryId: categoryMap['Wallets'], name: "Classic Leather Wallet", price: "20" },
            // Add more products here...
        ];

        // Insert products into the database
        await Product.insertMany(products);
        console.log('Products inserted successfully');
    } catch (err) {
        console.error('Error:', err);
    } finally {
        mongoose.connection.close();
    }
}

module.exports = initProducts;