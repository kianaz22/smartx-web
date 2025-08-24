import type { Meta, StoryObj } from '@storybook/react';
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { ThemeProvider, useTheme as useThemeContext } from './ThemeProvider';

const ColorSwatch = ({ color, name, value, width = 80 }: { color: string; name: string; value: string; width?: number; }) => (
  <Box sx={{ textAlign: 'center', mb: 2 }}>
      <Typography variant="caption" sx={{ display: 'block', fontFamily: 'monospace', color: '#000', mixBlendMode: 'difference', filter: 'invert(1)', fontWeight: 'bold' }}>
      {name}
    </Typography>
    <Box
      sx={{
        width: width,
        height: 40,
        borderRadius: 1,
        backgroundColor: color,
        border: '1px solid',
        borderColor: 'divider',
        mb: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
    </Box>
    <Typography variant="caption" sx={{ display: 'block', fontFamily: 'monospace' }}>
      {value}
    </Typography>
  </Box>
);

const ColorSection = ({ title, colors }: { title: string; colors: Record<string, string> }) => (
  <Box sx={{ mb: 4 }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
      {title}
    </Typography>
    <Grid container spacing={2}>
      {Object.entries(colors).map(([key, value]) => (
        <Grid item key={key}>
          <ColorSwatch color={value} name={key} value={value} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const ThemePaletteDisplay = () => {
  const theme = useTheme();
  const themeContext = useThemeContext();
  const [currentMode, setCurrentMode] = useState<'light' | 'dark'>(themeContext.mode);

  // Debug logging
  console.log('ThemePaletteDisplay render:', {
    currentMode,
    contextMode: themeContext.mode,
    themeMode: theme.palette.mode,
    primaryMain: theme.palette.primary.main,
    surface: theme.palette.schemes?.surface
  });

  // Sync local state with theme context
  useEffect(() => {
    console.log('useEffect - theme context mode changed:', themeContext.mode);
    setCurrentMode(themeContext.mode);
  }, [themeContext.mode]);

  const handleThemeSwitch = () => {
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    console.log('handleThemeSwitch called:', { currentMode, newMode });
    setCurrentMode(newMode);
    console.log('Calling themeContext.setTheme with:', newMode);
    themeContext.setTheme(newMode);
  };

  // Helper function to convert palette colors to string records
  const paletteToRecord = (paletteColor: any): Record<string, string> => {
    const result: Record<string, string> = {};
    Object.entries(paletteColor).forEach(([key, value]) => {
      if (typeof value === 'string') {
        result[key] = value;
      }
    });
    return result;
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Theme Color Palette - {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode
        </Typography>
        <Button
          variant="outlined"
          onClick={handleThemeSwitch}
        >
          Switch to {currentMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Stack>

      {/* Primary Colors */}
      <ColorSection title="Primary Colors" colors={paletteToRecord(theme.palette.primary)} />

      {/* Secondary Colors */}
      <ColorSection title="Secondary Colors" colors={paletteToRecord(theme.palette.secondary)} />

      {/* Tertiary Colors */}
      <ColorSection title="Tertiary Colors" colors={paletteToRecord(theme.palette.tertiary)} />

      {/* Error Colors */}
      <ColorSection title="Error Colors" colors={paletteToRecord(theme.palette.error)} />

      {/* Neutral Colors */}
      {theme.palette.neutral && (
        <ColorSection title="Neutral Colors" colors={theme.palette.neutral} />
      )}

      {/* Neutral Variant Colors */}
      {theme.palette.neutralVariant && (
        <ColorSection title="Neutral Variant Colors" colors={theme.palette.neutralVariant} />
      )}

      {/* Accent Colors */}
      {theme.palette.accent && (
        <ColorSection title="Accent Colors" colors={theme.palette.accent} />
      )}

      {/* Scheme Colors */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Scheme Colors
        </Typography>
        <Grid container spacing={2}>
          {Object.entries(theme.palette.schemes || {}).map(([key, value]) => (
            <Grid item key={key}>
              <ColorSwatch color={value} name={key} value={value} width={180} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const meta: Meta<typeof ThemePaletteDisplay> = {
  title: 'Theme/Color Palette',
  component: ThemePaletteDisplay,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive display of all colors available in the design system theme with the ability to switch between light and dark modes.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
