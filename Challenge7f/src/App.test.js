import { render, screen } from '@testing-library/react';
import Home from './pages/home';


test('Home Test', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Sewa/i);
  expect(linkElement).toBeInTheDocument();
});
