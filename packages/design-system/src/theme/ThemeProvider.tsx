import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { createThemeByMode } from './index';
import RTLProvider from './RTLProvider';

interface ThemeContextType {
  mode: PaletteMode;
  direction: 'ltr' | 'rtl';
  toggleTheme: () => void;
  setTheme: (mode: PaletteMode) => void;
  toggleDirection: () => void;
  setDirection: (direction: 'ltr' | 'rtl') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: PaletteMode;
  defaultDirection?: 'ltr' | 'rtl';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  defaultMode = 'light',
  defaultDirection = 'rtl'
}) => {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>(defaultDirection);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as PaletteMode;
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    }
    
    const savedDirection = localStorage.getItem('theme-direction') as 'ltr' | 'rtl';
    if (savedDirection && (savedDirection === 'ltr' || savedDirection === 'rtl')) {
      setDirection(savedDirection);
    }
  }, []);

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  // Save direction preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('theme-direction', direction);
  }, [direction]);

  const toggleTheme = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  const setTheme = (newMode: PaletteMode) => {
    setMode(newMode);
  };

  const toggleDirection = () => {
    setDirection(prevDirection => prevDirection === 'ltr' ? 'rtl' : 'ltr');
  };

  const setDirectionHandler = (newDirection: 'ltr' | 'rtl') => {
    setDirection(newDirection);
  };

  const theme = createThemeByMode(mode, direction);

  const contextValue: ThemeContextType = {
    mode,
    direction,
    toggleTheme,
    setTheme,
    toggleDirection,
    setDirection: setDirectionHandler,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <RTLProvider direction={direction}>
        <MuiThemeProvider theme={theme}>
          {children}
        </MuiThemeProvider>
      </RTLProvider>
    </ThemeContext.Provider>
  );
};
