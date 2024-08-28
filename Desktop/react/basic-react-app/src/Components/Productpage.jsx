import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartFunctions';
import './ProductPage.css'

const ProductPage = ({ products }) => {
  const {addToCart}=useCart();
  const { productId } = useParams();
  const product = products.find(prod => prod.id === parseInt(productId));
  const handleAdd=()=>{
    addToCart(product);
  }
  return (
    <div className='product-outer'>
      {product ? (
        <div className='product-outer' >
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick={handleAdd}>Add to cart</button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};
export default ProductPage;
