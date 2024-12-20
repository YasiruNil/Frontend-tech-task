import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductList from './ProductList';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, urlPath: '/product-1', articles: [], articleCount: 0, childCategories: [] },
  { id: 2, name: 'Product 2', price: 200, urlPath: '/product-2', articles: [], articleCount: 0, childCategories: [] },
];

describe('ProductList', () => {
  test('renders product list', () => {
    render(
      <Router>
        <ProductList productList={mockProducts} />
      </Router>
    );
    
    mockProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  test('renders empty message when no products', () => {
    render(
      <Router>
        <ProductList productList={[]} />
      </Router>
    );
    
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });
});
