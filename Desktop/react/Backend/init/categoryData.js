const mongoose = require('mongoose');
const Category = require('../Models/category'); // Adjust the path as necessary

mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders', {
 
})
.then(async () => {
    // Delete existing categories
    await Category.deleteMany({});

    // Define categories with ObjectIds
    const categories = [
        { _id: new mongoose.Types.ObjectId(), name: 'Wallets' },
        { _id: new mongoose.Types.ObjectId(), name: 'Clothing' },
        { _id: new mongoose.Types.ObjectId(), name: 'Footwear' },
        { _id: new mongoose.Types.ObjectId(), name: 'Accessories' },
    ];

    // Insert categories into the database
    await Category.insertMany(categories);
    console.log('Categories inserted successfully');
    mongoose.connection.close();
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    mongoose.connection.close();
});
