import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductList from './ProductList';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

describe('ProductList', () => {
  test('renders product list', () => {
    render(<ProductList products={mockProducts} />);
    
    mockProducts.forEach(product => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  test('renders empty message when no products', () => {
    render(<ProductList products={[]} />);
    
    expect(screen.getByText('No products available')).toBeInTheDocument();
  });
});
