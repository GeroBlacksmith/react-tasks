import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Tasks Manager title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Tasks Manager/i);
  expect(titleElement).toBeInTheDocument();
});
