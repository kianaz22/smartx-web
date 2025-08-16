import React from 'react';
import { render, screen } from '@testing-library/react';
import { DSIconButton } from './DSIconButton';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Mock theme for testing - extend the interface to match our design system
const mockTheme = createTheme({
  palette: {
    schemes: {
      primary: '#1976d2',
      onPrimary: '#ffffff',
      primaryContainer: '#e3f2fd',
    },
    neutral: {
      disabled: '#bdbdbd',
      disabledText: '#757575',
      surfaceOpacity8: 'rgba(0, 0, 0, 0.08)',
      surfaceOpacity12: 'rgba(0, 0, 0, 0.12)',
      surfaceOpacity16: 'rgba(0, 0, 0, 0.16)',
    },
  },
} as any); // Using 'as any' to bypass type checking for test mock

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      {component}
    </ThemeProvider>
  );
};

describe('DSIconButton', () => {
  it('renders with default props', () => {
    renderWithTheme(
      <DSIconButton>
        <SearchIcon />
      </DSIconButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = renderWithTheme(
      <DSIconButton buttonVariant="tonal">
        <SearchIcon />
      </DSIconButton>
    );
    
    let button = screen.getByRole('button');
    expect(button).toHaveClass('MuiIconButton-root');
    
    rerender(
      <ThemeProvider theme={mockTheme}>
        <DSIconButton buttonVariant="outlined">
          <SearchIcon />
        </DSIconButton>
      </ThemeProvider>
    );
    
    button = screen.getByRole('button');
    expect(button).toHaveClass('MuiIconButton-root');
  });

  it('renders with different sizes', () => {
    renderWithTheme(
      <DSIconButton buttonSize="standard">
        <SearchIcon />
      </DSIconButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('shows loading state', () => {
    renderWithTheme(
      <DSIconButton loading>
        <SearchIcon />
      </DSIconButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Spinner should be visible
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    renderWithTheme(
      <DSIconButton disabled>
        <SearchIcon />
      </DSIconButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('passes through additional props', () => {
    renderWithTheme(
      <DSIconButton data-testid="custom-button" aria-label="Search">
        <SearchIcon />
      </DSIconButton>
    );
    
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'Search');
  });
});
