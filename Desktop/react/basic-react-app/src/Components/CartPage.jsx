import React from 'react';
import { useCart } from './CartFunctions';
import "./CartPage.css"
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  const handleClear = () => {
    clearCart();
  };

  return (
    <div className='cart-outer'>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (<div>
        <p>Your cart is empty</p>
        <Link to='/'><button> Continue to shopping</button></Link>
        </div>
      ) : (
        <div className='cart-items-outer'>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={handleClear}>Clear Cart</button>
        </div>
      )}    
    </div>
  );
};
export default CartPage;