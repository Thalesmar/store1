import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError('Failed to load product.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <section className="Products-container"><div className="container">Loading...</div></section>;
  if (error) return <section className="Products-container"><div className="container">{error}</div></section>;
  if (!product) return null;

  return (
    <section className="Products-container">
      <div className="container">
        <Link to="/products" style={{ display: 'inline-block', marginBottom: 16 }}>&larr; Back to products</Link>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div>
            <img src={product.image} alt={product.title} style={{ width: 320, height: 420, objectFit: 'contain' }} />
          </div>
          <div>
            <h1 style={{ marginBottom: 12 }}>{product.title}</h1>
            <p className="product-category" style={{ padding: 0 }}>{product.category}</p>
            <p className="product-para">${product.price}</p>
            <p style={{ margin: '16px 0' }}>{product.description}</p>
            <button className="product-btn">add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

