import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza a aplicação com o título React Mastery Lab no header e footer', () => {
  render(<App />);
  const titulos = screen.getAllByText(/React Mastery Lab/i);
  expect(titulos.length).toBeGreaterThanOrEqual(1);
  expect(titulos[0]).toBeInTheDocument();
});
