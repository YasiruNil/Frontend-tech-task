import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default notFound