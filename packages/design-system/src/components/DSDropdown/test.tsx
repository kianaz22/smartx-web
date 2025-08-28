

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomDropdown } from './Dropdown';

const items = [
  { id: 1, label: 'Item 1', selected: false },
  { id: 2, label: 'Item 2', selected: true },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#92B900',
      100: '#F5F8E6',
      200: '#DFEAB3',
    },
    background: {
      paper: '#ffffff',
    },
  },
});

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

test('renders dropdown items', () => {
  renderWithTheme(<CustomDropdown items={items} />);
  expect(screen.getByText('Item 1')).toBeInTheDocument();
  expect(screen.getByText('Item 2')).toBeInTheDocument();
});

test('calls onSelect when item clicked', () => {
  const handleSelect = jest.fn();
  renderWithTheme(<CustomDropdown items={items} onSelect={handleSelect} />);

  fireEvent.click(screen.getByText('Item 1'));
  expect(handleSelect).toHaveBeenCalledWith(items[0]);
});
