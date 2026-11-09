import React, { useState } from 'react';
import './Products.css';

const products = [
  { id: 1, title: 'APPAREL', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop' },
  { id: 2, title: 'ORGANIC COTTON', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2000&auto=format&fit=crop' },
  { id: 3, title: 'LEATHER', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2000&auto=format&fit=crop' },
  { id: 4, title: 'SPORTS & YOGA', image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2000&auto=format&fit=crop' },
  { id: 5, title: 'SOFT GOODS', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2000&auto=format&fit=crop' },
  { id: 6, title: 'HARD GOODS', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop' },
];

export default function Products() {
  const [hoveredProduct, setHoveredProduct] = useState(1);

  return (
    <section className="products-section">
      <div className="products-bg-container">
        {products.map((product) => (
          <img
            key={product.id}
            src={product.image}
            alt={product.title}
            className={`product-bg-image ${hoveredProduct === product.id ? 'active' : ''}`}
          />
        ))}
        <div className="product-bg-overlay"></div>
      </div>
      
      <div className="container relative-z">
        <h2 className="text-caption mb-4">OUR EXPERTISE</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li 
              key={product.id}
              className="product-item"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <h3 className="text-huge">{product.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
