import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  return (
    <section className="Products-container">
      <div className="container">
        <nav className="breadcrumb"><span>Home</span> <span className="sep">/</span> <strong>Shop</strong></nav>
        <div className="shop-header">
          <h1>Shop</h1>
          <div className="sort">
            <label htmlFor="sort">Sort by</label>
            <select id="sort" onChange={() => {}}>
              <option value="popular">Most popular</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="shop-layout">
          <aside className="filters">
            <h3>Categories</h3>
            <ul className="plain-list">
              <li><button>Category 1</button></li>
              <li><button>Category 2</button></li>
              <li><button>Category 3</button></li>
              <li><button>Category 4</button></li>
            </ul>
            <h3>Price Range</h3>
            <input type="range" min="0" max="1000" />
            <h3>Brands</h3>
            <ul className="plain-list">
              <li><label><input type="checkbox"/> Brand 1</label></li>
              <li><label><input type="checkbox"/> Brand 2</label></li>
              <li><label><input type="checkbox"/> Brand 3</label></li>
              <li><label><input type="checkbox"/> Brand 4</label></li>
            </ul>
            <h3>Rating</h3>
            <ul className="plain-list">
              <li>★★★★★</li>
              <li>★★★★☆</li>
              <li>★★★☆☆</li>
              <li>★★☆☆☆</li>
            </ul>
          </aside>
          <div className="Products">
          {loading && <div style={{ gridColumn: '1 / -1' }}>Loading...</div>}
          {!loading && error && (
            <div style={{ gridColumn: '1 / -1' }}>{error}</div>
          )}
          {!loading && !error && products.map((product) => (
            <div
              className="Product-card clickable"
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <img src={product.image} alt={product.title} loading="lazy" />
              <p className="product-category">{product.category}</p>
              <h3 className="product-text">{product.title}</h3>
              <p className="product-para">${product.price}</p>
              <button
                className="product-btn"
                onClick={(e) => e.stopPropagation()}
              >
                add to cart
              </button>
            </div>
          ))}
          </div>
        </div>
        <div className="pagination">
          <button className="page">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
