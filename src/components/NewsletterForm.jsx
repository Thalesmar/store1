import React from 'react';

const NewsletterForm = () => {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2 className="contact-heading">Sign Up for Our Newsletter</h2>
        <p className="contact-para">
          Get the latest updates on new products and upcoming sales.
        </p>
      </div>
      <div className="contact-input">
        <input
          type="email"
          className="email-input"
          placeholder="Enter your email"
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </section>
  );
};

export default NewsletterForm;
