import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { DSFab } from './DSFab';
import { theme } from '../../theme';

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      {component}
    </ThemeProvider>
  );
};

describe('DSFab', () => {
  it('renders with default props', () => {
    renderWithTheme(<DSFab>+</DSFab>);
    const fab = screen.getByRole('button');
    expect(fab).toBeInTheDocument();
    expect(fab).toHaveTextContent('+');
  });

  it('renders with different variants', () => {
    const { rerender } = renderWithTheme(<DSFab fabVariant="filled">+</DSFab>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<DSFab fabVariant="tonal">+</DSFab>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<DSFab fabVariant="outlined">+</DSFab>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = renderWithTheme(<DSFab fabSize="small">+</DSFab>);
    expect(screen.getByRole('button')).toBeInTheDocument();

    rerender(<DSFab fabSize="standard">+</DSFab>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders with loading state', () => {
    renderWithTheme(<DSFab loading>+</DSFab>);
    const fab = screen.getByRole('button');
    expect(fab).toBeInTheDocument();
    // Check for loading spinner
    expect(fab.querySelector('[role="progressbar"]')).toBeInTheDocument();
  });

  it('renders with disabled state', () => {
    renderWithTheme(<DSFab disabled>+</DSFab>);
    const fab = screen.getByRole('button');
    expect(fab).toBeDisabled();
  });

  it('renders with custom className', () => {
    renderWithTheme(<DSFab className="custom-class">+</DSFab>);
    const fab = screen.getByRole('button');
    expect(fab).toHaveClass('custom-class');
  });

  it('renders with icon children', () => {
    renderWithTheme(<DSFab>★</DSFab>);
    const fab = screen.getByRole('button');
    expect(fab).toHaveTextContent('★');
  });
});
