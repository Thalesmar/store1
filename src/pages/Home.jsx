import React from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import NewsletterForm from '../components/NewsletterForm';

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryCard />
      <ProductCard />
      <NewsletterForm />
    </>
  );
};

export default Home;

