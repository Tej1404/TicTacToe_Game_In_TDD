import { render, screen } from '@testing-library/react';
import App from './App';

test('it should have the correct title', () => {
  render(<App />);
  const text = screen.getByText("TicTacToe Game");
  expect(text).toBeInTheDocument();
});
