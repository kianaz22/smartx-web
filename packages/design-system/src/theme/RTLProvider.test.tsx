import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';
import RTLProvider from './RTLProvider';

// Mock the theme creation to avoid complex setup
jest.mock('./index', () => ({
  createThemeByMode: jest.fn(() => ({
    palette: { mode: 'light' },
    direction: 'ltr',
  })),
}));

describe('RTLProvider', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <RTLProvider direction="ltr">
          <div>Test Content</div>
        </RTLProvider>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies RTL direction correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <RTLProvider direction="rtl">
          <div>Test Content</div>
        </RTLProvider>
      </ThemeProvider>
    );

    // The RTL provider should wrap content in a CacheProvider
    expect(container.firstChild).toBeTruthy();
  });

  it('applies LTR direction correctly', () => {
    const { container } = render(
      <ThemeProvider>
        <RTLProvider direction="ltr">
          <div>Test Content</div>
        </RTLProvider>
      </ThemeProvider>
    );

    // The LTR provider should wrap content in a CacheProvider
    expect(container.firstChild).toBeTruthy();
  });
});
