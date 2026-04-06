import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  const headingElement = screen.getByText(/landing page/i);
  expect(headingElement).toBeInTheDocument();
});
