const initData=require('./categoryData.js')
const mongoose = require('mongoose');
const categories = require("../Models/category");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shamaqtraders');
}


const initDB=async()=>{
    await categories.deleteMany({});
    await categories.insertMany(initData);
    console.log("data initialized")
}

initDB();

