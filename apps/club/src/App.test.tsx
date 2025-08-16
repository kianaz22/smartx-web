import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Welcome to SmartX Club/i)).toBeInTheDocument();
  });
});