const initData=require('./productsData.js')
const mongoose = require('mongoose');
const products = require("../Models/products");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders');
}
const initDB=async()=>{
    await products.deleteMany({});
    await products.insertMany(initData);
    console.log(" data initialized")
}

initDB();