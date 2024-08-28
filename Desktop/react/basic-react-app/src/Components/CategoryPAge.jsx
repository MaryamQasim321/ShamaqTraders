import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    // Fetch the category details
    fetch(`/api/categories/${categoryId}`)
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(error => console.error('Error fetching category:', error));

    // Fetch products of the category
    fetch(`/api/products?categoryId=${categoryId}`)
      .then(response => response.json())
      .then(data => setCategoryProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryId]);

  return (
    <div className="category-page">
      <h1>{category ? category.name : 'Loading...'}</h1>
      <div className="product-list">
        {categoryProducts.length > 0 ? (
          categoryProducts.map(product => (
            <div key={product._id} className="product-item">
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <button>View Details</button>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
