import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DSButton } from './DSButton';

describe('DSButton', () => {
  it('renders button with text', () => {
    render(<DSButton>Click me</DSButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies variant prop correctly', () => {
    render(<DSButton variant="outlined">Outlined</DSButton>);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-outlined');
  });

  it('applies size prop correctly', () => {
    render(<DSButton size="large">Large Button</DSButton>);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
  });

  it('handles disabled state', () => {
    render(<DSButton disabled>Disabled</DSButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('applies color prop correctly', () => {
    render(<DSButton color="secondary">Secondary</DSButton>);
    expect(screen.getByRole('button')).toHaveClass('MuiButton-containedSecondary');
  });
});