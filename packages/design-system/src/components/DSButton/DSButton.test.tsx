import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DSButton } from './DSButton';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { RTLProvider } from '../../theme/RTLProvider';

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

  it('maintains proper icon spacing in RTL mode', () => {
    render(
      <ThemeProvider>
        <RTLProvider direction="rtl">
          <DSButton startIcon={<span data-testid="start-icon">→</span>}>
            RTL Button
          </DSButton>
        </RTLProvider>
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    const startIcon = screen.getByTestId('start-icon').parentElement;
    expect(startIcon).toHaveStyle({ marginRight: '8px' });
  });
});