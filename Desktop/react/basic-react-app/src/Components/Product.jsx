import React from 'react';

// Define the Product component
const Product = ({ product }) => {
  const { id, categoryId, name, price } = product;

  return (
    <div className="product-div">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <p>{id}</p>
      <p className="product-description">{categoryId}</p>
    </div>
  );
};

export default Product;
