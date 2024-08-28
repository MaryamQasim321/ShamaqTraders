import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './CategoryMenu.css';
import Product from './Product';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleToggle = async (categoryId) => {
    setExpandedCategoryId(expandedCategoryId === categoryId ? null : categoryId);

    if (expandedCategoryId !== categoryId) {
      try {
        const response = await fetch(`http://localhost:8080/api/products?categoryId=${categoryId}`);
        if (!response.ok) throw new Error(`Products fetch error: ${response.statusText}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Unexpected data format for products:', data);
          setProducts([]); // Default to empty array on error
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setError({
          message: error.message,
          stack: error.stack,
        });
      }
    }
  };

  return (
    <div className='category-menu'>
      {error && (
        <div className='error-message'>
          <p>{error.message}</p>
          <pre>{error.stack}</pre> {/* Display the stack trace */}
        </div>
      )}
      {categories.map(category => {
        const categoryProducts = products.filter(product => product.categoryId === category._id); // Ensure correct ID field

        return (
          <div key={category._id}>
            <div className='category-arrow' onClick={() => handleToggle(category._id)}>
              <h1 className='category-heading'>
                <Link to={`/category/${category._id}`}>{category.name}</Link>
              </h1>
              {expandedCategoryId === category._id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {expandedCategoryId === category._id && (
              <ul>
                {categoryProducts.length > 0 ? (
                  categoryProducts.map(product => (
                    <Product key={product._id} product={product} />
                  ))
                ) : (
                  <li>No products available</li>
                )}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
