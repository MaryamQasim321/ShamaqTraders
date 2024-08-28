const mongoose = require('mongoose');
const Product = require('../Models/products'); // Adjust path as necessary
const Category = require('../Models/category'); // Adjust path as necessary

mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    // Delete existing products
    await Product.deleteMany({});

    // Fetch categories to get their ObjectIds
    const categories = await Category.find();

    if (!categories.length) {
        throw new Error('No categories found. Please ensure categories are inserted before adding products.');
    }

    const products = [
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Wallets')._id, name: "Classic Leather Wallet", price: "20" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Wallets')._id, name: "Slim Card Holder", price: "15" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Wallets')._id, name: "Premium Leather Belt", price: "25" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Clothing')._id, name: "Cotton T-Shirt", price: "10" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Clothing')._id, name: "Denim Jeans", price: "40" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Clothing')._id, name: "Formal Shirt", price: "30" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Footwear')._id, name: "Running Shoes", price: "50" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Footwear')._id, name: "Hiking Boots", price: "70" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Footwear')._id, name: "Casual Sneakers", price: "45" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Wool Scarf", price: "15" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Leather Gloves", price: "35" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Winter Coat", price: "120" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Analog Watch", price: "150" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Smartwatch", price: "200" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Digital Sports Watch", price: "80" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Sunglasses", price: "50" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Reading Glasses", price: "30" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Eyeglass Case", price: "10" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Laptop Bag", price: "60" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Leather Briefcase", price: "100" },
        { _id: new mongoose.Types.ObjectId(), categoryId: categories.find(c => c.name === 'Accessories')._id, name: "Backpack", price: "70" },
    ];

    // Insert products into the database
    await Product.insertMany(products);
    console.log('Products inserted successfully');
    mongoose.connection.close();
})
.catch(err => {
    console.error('Error:', err);
    mongoose.connection.close();
});
