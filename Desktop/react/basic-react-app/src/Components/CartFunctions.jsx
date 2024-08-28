import React, { createContext, useState, useContext, useEffect } from 'react';

const CartFunctions = createContext();

export const CartProvider = ({ children }) => {


   // Initialize cart state with data from local storage
   const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));

  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("added");
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartFunctions.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartFunctions.Provider>
  );
};

export const useCart = () => useContext(CartFunctions);
