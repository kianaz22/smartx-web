import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { darkPalette, lightPalette } from './components/Palette';
import { customTypographyTheme } from './components/typography';

// Extend MUI theme types
declare module '@mui/material/styles' {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  interface Palette {
    neutral: Record<string, string>;
    neutralVariant: Record<string, string>;
    accent: Record<string, string>;
    tertiary: Record<string, string>;
    schemes: {
      primary: string;
      onPrimary: string;
      primaryContainer: string;
      onPrimaryContainer: string;
      secondary: string;
      onSecondary: string;
      secondaryContainer: string;
      onSecondaryContainer: string;
      tertiary: string;
      onTertiary: string;
      tertiaryContainer: string;
      onTertiaryContainer: string;
      error: string;
      onError: string;
      errorContainer: string;
      onErrorContainer: string;
      surface: string;
      onSurface: string;
      surfaceVariant: string;
      onSurfaceVariant: string;
      outline: string;
      inverseSurface: string;
      inverseOnSurface: string;
      inversePrimary: string;
    };
  }

  interface PaletteOptions {
    neutral?: Record<string, string>;
    neutralVariant?: Record<string, string>;
    accent?: Record<string, string>;
    tertiary?: Record<string, string>;
    outline?: string;
  }

  interface TypeText {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    hint?: string;
  }

  interface TypeBackground {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    surface?: string;
    surfaceVariant?: string;
    inverseSurface?: string;
  }

  interface TypographyVariants {
    // Display variants
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;

    // Headline variants
    headlineLarge: React.CSSProperties;
    headlineMedium: React.CSSProperties;
    headlineSmall: React.CSSProperties;

    // Title variants
    titleLarge: React.CSSProperties;
    titleMedium: React.CSSProperties;
    titleSmall: React.CSSProperties;

    // Label variants
    labelLarge: React.CSSProperties;
    labelMedium: React.CSSProperties;
    labelSmall: React.CSSProperties;

    // Body variants
    bodyLarge: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodyXSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    // Display variants
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;

    // Headline variants
    headlineLarge?: React.CSSProperties;
    headlineMedium?: React.CSSProperties;
    headlineSmall?: React.CSSProperties;

    // Title variants
    titleLarge?: React.CSSProperties;
    titleMedium?: React.CSSProperties;
    titleSmall?: React.CSSProperties;

    // Label variants
    labelLarge?: React.CSSProperties;
    labelMedium?: React.CSSProperties;
    labelSmall?: React.CSSProperties;

    // Body variants
    bodyLarge?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodyXSmall?: React.CSSProperties;
  }
}

// Extend MUI Typography component props
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    headlineLarge: true;
    headlineMedium: true;
    headlineSmall: true;
    titleLarge: true;
    titleMedium: true;
    titleSmall: true;
    labelLarge: true;
    labelMedium: true;
    labelSmall: true;
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
    bodyXSmall: true;
  }
}

// Theme creation function
const createThemeByMode = (mode: PaletteMode, direction: 'ltr' | 'rtl' = 'rtl') => {
  const palette = mode === 'dark' ? darkPalette.palette : lightPalette.palette;

  return createTheme({
    ...customTypographyTheme,
    palette,
    direction,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            direction,
          },
        },
      },
    },
    typography: {
      fontFamily: customTypographyTheme.typography.fontFamily,
      displayLarge: customTypographyTheme.typography.displayLarge,
      displayMedium: customTypographyTheme.typography.displayMedium,
      displaySmall: customTypographyTheme.typography.displaySmall,
      headlineLarge: customTypographyTheme.typography.headlineLarge,
      headlineMedium: customTypographyTheme.typography.headlineMedium,
      headlineSmall: customTypographyTheme.typography.headlineSmall,
      titleLarge: customTypographyTheme.typography.titleLarge,
      titleMedium: customTypographyTheme.typography.titleMedium,
      titleSmall: customTypographyTheme.typography.titleSmall,
      labelLarge: customTypographyTheme.typography.labelLarge,
      labelMedium: customTypographyTheme.typography.labelMedium,
      labelSmall: customTypographyTheme.typography.labelSmall,
      bodyLarge: customTypographyTheme.typography.bodyLarge,
      bodyMedium: customTypographyTheme.typography.bodyMedium,
      bodySmall: customTypographyTheme.typography.bodySmall,
      bodyXSmall: customTypographyTheme.typography.bodyXSmall,
    },
  });
};



// Default theme (light with RTL)
export const theme = createThemeByMode('light', 'rtl');

// Export theme creation function for dynamic switching
export { createThemeByMode };

// RTL utilities and configurations are already exported above

// Re-export theme components
export { ThemeProvider, useTheme } from './ThemeProvider';

// Load font CSS files (side-effect imports)
import './fonts.css';

export default theme;
