import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { designTokens } from './designTokens';

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

const lightPalette = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      primary: designTokens.color.light.schemes.primary,
      onPrimary: designTokens.color.light.schemes.onPrimary,
      primaryContainer: designTokens.color.light.schemes.primaryContainer,
      onPrimaryContainer: designTokens.color.light.schemes.onPrimaryContainer,
      0: designTokens.color.light.primary[0],
      5: designTokens.color.light.primary[5],
      10: designTokens.color.light.primary[10],
      15: designTokens.color.light.primary[15],
      20: designTokens.color.light.primary[20],
      25: designTokens.color.light.primary[25],
      30: designTokens.color.light.primary[30],
      35: designTokens.color.light.primary[35],
      40: designTokens.color.light.primary[40],
      50: designTokens.color.light.primary[50],
      60: designTokens.color.light.primary[60],
      65: designTokens.color.light.primary[65],
      70: designTokens.color.light.primary[70],
      75: designTokens.color.light.primary[75],
      80: designTokens.color.light.primary[80],
      85: designTokens.color.light.primary[85],
      90: designTokens.color.light.primary[90],
      95: designTokens.color.light.primary[95],
      98: designTokens.color.light.primary[98],
      99: designTokens.color.light.primary[99],
      100: designTokens.color.light.primary[100],
    },
    secondary: {
      secondary: designTokens.color.light.schemes.secondary,
      onSecondary: designTokens.color.light.schemes.onSecondary,
      secondaryContainer: designTokens.color.light.schemes.secondaryContainer,
      onSecondaryContainer: designTokens.color.light.schemes.onSecondaryContainer,
      0: designTokens.color.light.secondary[0],
      5: designTokens.color.light.secondary[5],
      10: designTokens.color.light.secondary[10],
      15: designTokens.color.light.secondary[15],
      20: designTokens.color.light.secondary[20],
      25: designTokens.color.light.secondary[25],
      30: designTokens.color.light.secondary[30],
      35: designTokens.color.light.secondary[35],
      40: designTokens.color.light.secondary[40],
      50: designTokens.color.light.secondary[50],
      60: designTokens.color.light.secondary[60],
      65: designTokens.color.light.secondary[65],
      70: designTokens.color.light.secondary[70],
      75: designTokens.color.light.secondary[75],
      80: designTokens.color.light.secondary[80],
      85: designTokens.color.light.secondary[85],
      90: designTokens.color.light.secondary[90],
      95: designTokens.color.light.secondary[95],
      98: designTokens.color.light.secondary[98],
      99: designTokens.color.light.secondary[99],
      100: designTokens.color.light.secondary[100],
    },
    tertiary: {
      tertiary: designTokens.color.light.schemes.tertiary,
      onTertiary: designTokens.color.light.schemes.onTertiary,
      tertiaryContainer: designTokens.color.light.schemes.tertiaryContainer,
      onTertiaryContainer: designTokens.color.light.schemes.onTertiaryContainer,
      0: designTokens.color.light.tertiary[0],
      5: designTokens.color.light.tertiary[5],
      10: designTokens.color.light.tertiary[10],
      15: designTokens.color.light.tertiary[15],
      20: designTokens.color.light.tertiary[20],
      25: designTokens.color.light.tertiary[25],
      30: designTokens.color.light.tertiary[30],
      35: designTokens.color.light.tertiary[35],
      40: designTokens.color.light.tertiary[40],
      50: designTokens.color.light.tertiary[50],
      60: designTokens.color.light.tertiary[60],
      65: designTokens.color.light.tertiary[65],
      70: designTokens.color.light.tertiary[70],
      75: designTokens.color.light.tertiary[75],
      80: designTokens.color.light.tertiary[80],
      85: designTokens.color.light.tertiary[85],
      90: designTokens.color.light.tertiary[90],
      95: designTokens.color.light.tertiary[95],
      98: designTokens.color.light.tertiary[98],
      99: designTokens.color.light.tertiary[99],
      100: designTokens.color.light.tertiary[100],
    },
    error: {
      error: designTokens.color.light.schemes.error,
      onError: designTokens.color.light.schemes.onError,
      errorContainer: designTokens.color.light.schemes.errorContainer,
      onErrorContainer: designTokens.color.light.schemes.onErrorContainer,
      0: designTokens.color.light.error[0],
      5: designTokens.color.light.error[5],
      10: designTokens.color.light.error[10],
      15: designTokens.color.light.error[15],
      20: designTokens.color.light.error[20],
      25: designTokens.color.light.error[25],
      30: designTokens.color.light.error[30],
      35: designTokens.color.light.error[35],
      40: designTokens.color.light.error[40],
      50: designTokens.color.light.error[50],
      60: designTokens.color.light.error[60],
      65: designTokens.color.light.error[65],
      70: designTokens.color.light.error[70],
      75: designTokens.color.light.error[75],
      80: designTokens.color.light.error[80],
      85: designTokens.color.light.error[85],
      90: designTokens.color.light.error[90],
      95: designTokens.color.light.error[95],
      98: designTokens.color.light.error[98],
      99: designTokens.color.light.error[99],
      100: designTokens.color.light.error[100],
    },
    neutral: {
      0: designTokens.color.light.neutral[0],
      1: designTokens.color.light.neutral[1],
      2: designTokens.color.light.neutral[2],
      5: designTokens.color.light.neutral[5],
      10: designTokens.color.light.neutral[10],
      15: designTokens.color.light.neutral[15],
      20: designTokens.color.light.neutral[20],
      25: designTokens.color.light.neutral[25],
      30: designTokens.color.light.neutral[30],
      35: designTokens.color.light.neutral[35],
      40: designTokens.color.light.neutral[40],
      50: designTokens.color.light.neutral[50],
      60: designTokens.color.light.neutral[60],
      65: designTokens.color.light.neutral[65],
      70: designTokens.color.light.neutral[70],
      75: designTokens.color.light.neutral[75],
      80: designTokens.color.light.neutral[80],
      85: designTokens.color.light.neutral[85],
      90: designTokens.color.light.neutral[90],
      95: designTokens.color.light.neutral[95],
      98: designTokens.color.light.neutral[98],
      99: designTokens.color.light.neutral[99],
      100: designTokens.color.light.neutral[100],
    },
    neutralVariant: {
      0: designTokens.color.light.neutralVariant[0],
      1: designTokens.color.light.neutralVariant[1],
      2: designTokens.color.light.neutralVariant[2],
      5: designTokens.color.light.neutralVariant[5],
      10: designTokens.color.light.neutralVariant[10],
      15: designTokens.color.light.neutralVariant[15],
      20: designTokens.color.light.neutralVariant[20],
      25: designTokens.color.light.neutralVariant[25],
      30: designTokens.color.light.neutralVariant[30],
      35: designTokens.color.light.neutralVariant[35],
      40: designTokens.color.light.neutralVariant[40],
      50: designTokens.color.light.neutralVariant[50],
      60: designTokens.color.light.neutralVariant[60],
      65: designTokens.color.light.neutralVariant[65],
      70: designTokens.color.light.neutralVariant[70],
      75: designTokens.color.light.neutralVariant[75],
      80: designTokens.color.light.neutralVariant[80],
      85: designTokens.color.light.neutralVariant[85],
      90: designTokens.color.light.neutralVariant[90],
      95: designTokens.color.light.neutralVariant[95],
      98: designTokens.color.light.neutralVariant[98],
      99: designTokens.color.light.neutralVariant[99],
      100: designTokens.color.light.neutralVariant[100],
    },
    accent: {
      0: designTokens.color.light.accent[0],
      2: designTokens.color.light.accent[2],
      5: designTokens.color.light.accent[5],
      10: designTokens.color.light.accent[10],
      15: designTokens.color.light.accent[15],
      20: designTokens.color.light.accent[20],
      25: designTokens.color.light.accent[25],
      30: designTokens.color.light.accent[30],
      35: designTokens.color.light.accent[35],
      40: designTokens.color.light.accent[40],
      50: designTokens.color.light.accent[50],
      60: designTokens.color.light.accent[60],
      65: designTokens.color.light.accent[65],
      70: designTokens.color.light.accent[70],
      75: designTokens.color.light.accent[75],
      80: designTokens.color.light.accent[80],
      85: designTokens.color.light.accent[85],
      90: designTokens.color.light.accent[90],
      95: designTokens.color.light.accent[95],
      98: designTokens.color.light.accent[98],
      99: designTokens.color.light.accent[99],
      100: designTokens.color.light.accent[100],
    },
    surface: {
      surface: designTokens.color.light.schemes.surface,
      onSurface: designTokens.color.light.schemes.onSurface,
      surfaceVariant: designTokens.color.light.schemes.surfaceVariant,
      onSurfaceVariant: designTokens.color.light.schemes.onSurfaceVariant,
      outline: designTokens.color.light.schemes.outline,
    },
    inverseSurface: {
      inverseSurface: designTokens.color.light.schemes.inverseSurface,
      inverseOnSurface: designTokens.color.light.schemes.inverseOnSurface,
      inversePrimary: designTokens.color.light.schemes.inversePrimary,
    },
    // Extended colors
    extended: {
      success: designTokens.color.light.extended.success,
      onSuccess: designTokens.color.light.extended.onSuccess,
      successContainer: designTokens.color.light.extended.successContainer,
      onSuccessContainer: designTokens.color.light.extended.onSuccessContainer,
      warning: designTokens.color.light.extended.warning,
      onWarning: designTokens.color.light.extended.onWarning,
      warningContainer: designTokens.color.light.extended.warningContainer,
      onWarningContainer: designTokens.color.light.extended.onWarningContainer,
      info: designTokens.color.light.extended.info,
      onInfo: designTokens.color.light.extended.onInfo,
      infoContainer: designTokens.color.light.extended.infoContainer,
      onInfoContainer: designTokens.color.light.extended.onInfoContainer,
    },
    // State layer colors
    stateLayer: {
      surfaceOpacity8: designTokens.color.light.stateLayer.surfaceOpacity8,
      surfaceOpacity12: designTokens.color.light.stateLayer.surfaceOpacity12,
      surfaceOpacity16: designTokens.color.light.stateLayer.surfaceOpacity16,
      errorOpacity8: designTokens.color.light.stateLayer.errorOpacity8,
      errorOpacity12: designTokens.color.light.stateLayer.errorOpacity12,
      errorOpacity16: designTokens.color.light.stateLayer.errorOpacity16,
      primaryOpacity8: designTokens.color.light.stateLayer.primaryOpacity8,
      primaryOpacity12: designTokens.color.light.stateLayer.primaryOpacity12,
      primaryOpacity16: designTokens.color.light.stateLayer.primaryOpacity16,
    },
  },
}

const darkPalette = {
  palette: {
    mode: 'dark' as PaletteMode,
    primary: {
      primary: designTokens.color.dark.schemes.primary,
      onPrimary: designTokens.color.dark.schemes.onPrimary,
      primaryContainer: designTokens.color.dark.schemes.primaryContainer,
      onPrimaryContainer: designTokens.color.dark.schemes.onPrimaryContainer,
      0: designTokens.color.dark.primary[0],
      5: designTokens.color.dark.primary[5],
      10: designTokens.color.dark.primary[10],
      15: designTokens.color.dark.primary[15],
      20: designTokens.color.dark.primary[20],
      25: designTokens.color.dark.primary[25],
      30: designTokens.color.dark.primary[30],
      35: designTokens.color.dark.primary[35],
      40: designTokens.color.dark.primary[40],
      50: designTokens.color.dark.primary[50],
      60: designTokens.color.dark.primary[60],
      65: designTokens.color.dark.primary[65],
      70: designTokens.color.dark.primary[70],
      75: designTokens.color.dark.primary[75],
      80: designTokens.color.dark.primary[80],
      85: designTokens.color.dark.primary[85],
      90: designTokens.color.dark.primary[90],
      95: designTokens.color.dark.primary[95],
      98: designTokens.color.dark.primary[98],
      99: designTokens.color.dark.primary[99],
      100: designTokens.color.dark.primary[100],
    },
    secondary: {
      secondary: designTokens.color.dark.schemes.secondary,
      onSecondary: designTokens.color.dark.schemes.onSecondary,
      secondaryContainer: designTokens.color.dark.schemes.secondaryContainer,
      onSecondaryContainer: designTokens.color.dark.schemes.onSecondaryContainer,
      0: designTokens.color.dark.secondary[0],
      5: designTokens.color.dark.secondary[5],
      10: designTokens.color.dark.secondary[10],
      15: designTokens.color.dark.secondary[15],
      20: designTokens.color.dark.secondary[20],
      25: designTokens.color.dark.secondary[25],
      30: designTokens.color.dark.secondary[30],
      35: designTokens.color.dark.secondary[35],
      40: designTokens.color.dark.secondary[40],
      50: designTokens.color.dark.secondary[50],
      60: designTokens.color.dark.secondary[60],
      65: designTokens.color.dark.secondary[65],
      70: designTokens.color.dark.secondary[70],
      75: designTokens.color.dark.secondary[75],
      80: designTokens.color.dark.secondary[80],
      85: designTokens.color.dark.secondary[85],
      90: designTokens.color.dark.secondary[90],
      95: designTokens.color.dark.secondary[95],
      98: designTokens.color.dark.secondary[98],
      99: designTokens.color.dark.secondary[99],
      100: designTokens.color.dark.secondary[100],
    },
    tertiary: {
      tertiary: designTokens.color.dark.schemes.tertiary,
      onTertiary: designTokens.color.dark.schemes.onTertiary,
      tertiaryContainer: designTokens.color.dark.schemes.tertiaryContainer,
      onTertiaryContainer: designTokens.color.dark.schemes.onTertiaryContainer,
      0: designTokens.color.dark.tertiary[0],
      5: designTokens.color.dark.tertiary[5],
      10: designTokens.color.dark.tertiary[10],
      15: designTokens.color.dark.tertiary[15],
      20: designTokens.color.dark.tertiary[20],
      25: designTokens.color.dark.tertiary[25],
      30: designTokens.color.dark.tertiary[30],
      35: designTokens.color.dark.tertiary[35],
      40: designTokens.color.dark.tertiary[40],
      50: designTokens.color.dark.tertiary[50],
      60: designTokens.color.dark.tertiary[60],
      65: designTokens.color.dark.tertiary[65],
      70: designTokens.color.dark.tertiary[70],
      75: designTokens.color.dark.tertiary[75],
      80: designTokens.color.dark.tertiary[80],
      85: designTokens.color.dark.tertiary[85],
      90: designTokens.color.dark.tertiary[90],
      95: designTokens.color.dark.tertiary[95],
      98: designTokens.color.dark.tertiary[98],
      99: designTokens.color.dark.tertiary[99],
      100: designTokens.color.dark.tertiary[100],
    },
    error: {
      error: designTokens.color.dark.schemes.error,
      onError: designTokens.color.dark.schemes.onError,
      errorContainer: designTokens.color.dark.schemes.errorContainer,
      onErrorContainer: designTokens.color.dark.schemes.onErrorContainer,
      0: designTokens.color.dark.error[0],
      5: designTokens.color.dark.error[5],
      10: designTokens.color.dark.error[10],
      15: designTokens.color.dark.error[15],
      20: designTokens.color.dark.error[20],
      25: designTokens.color.dark.error[25],
      30: designTokens.color.dark.error[30],
      35: designTokens.color.dark.error[35],
      40: designTokens.color.dark.error[40],
      50: designTokens.color.dark.error[50],
      60: designTokens.color.dark.error[60],
      65: designTokens.color.dark.error[65],
      70: designTokens.color.dark.error[70],
      75: designTokens.color.dark.error[75],
      80: designTokens.color.dark.error[80],
      85: designTokens.color.dark.error[85],
      90: designTokens.color.dark.error[90],
      95: designTokens.color.dark.error[95],
      98: designTokens.color.dark.error[98],
      99: designTokens.color.dark.error[99],
      100: designTokens.color.dark.error[100],
    },
    neutral: {
      0: designTokens.color.dark.neutral[0],
      1: designTokens.color.dark.neutral[1],
      2: designTokens.color.dark.neutral[2],
      5: designTokens.color.dark.neutral[5],
      10: designTokens.color.dark.neutral[10],
      15: designTokens.color.dark.neutral[15],
      20: designTokens.color.dark.neutral[20],
      25: designTokens.color.dark.neutral[25],
      30: designTokens.color.dark.neutral[30],
      35: designTokens.color.dark.neutral[35],
      40: designTokens.color.dark.neutral[40],
      50: designTokens.color.dark.neutral[50],
      60: designTokens.color.dark.neutral[60],
      65: designTokens.color.dark.neutral[65],
      70: designTokens.color.dark.neutral[70],
      75: designTokens.color.dark.neutral[75],
      80: designTokens.color.dark.neutral[80],
      85: designTokens.color.dark.neutral[85],
      90: designTokens.color.dark.neutral[90],
      95: designTokens.color.dark.neutral[95],
      98: designTokens.color.dark.neutral[98],
      99: designTokens.color.dark.neutral[99],
      100: designTokens.color.dark.neutral[100],
    },
    neutralVariant: {
      0: designTokens.color.dark.neutralVariant[0],
      1: designTokens.color.dark.neutralVariant[1],
      2: designTokens.color.dark.neutralVariant[2],
      5: designTokens.color.dark.neutralVariant[5],
      10: designTokens.color.dark.neutralVariant[10],
      15: designTokens.color.dark.neutralVariant[15],
      20: designTokens.color.dark.neutralVariant[20],
      25: designTokens.color.dark.neutralVariant[25],
      30: designTokens.color.dark.neutralVariant[30],
      35: designTokens.color.dark.neutralVariant[35],
      40: designTokens.color.dark.neutralVariant[40],
      50: designTokens.color.dark.neutralVariant[50],
      60: designTokens.color.dark.neutralVariant[60],
      65: designTokens.color.dark.neutralVariant[65],
      70: designTokens.color.dark.neutralVariant[70],
      75: designTokens.color.dark.neutralVariant[75],
      80: designTokens.color.dark.neutralVariant[80],
      85: designTokens.color.dark.neutralVariant[85],
      90: designTokens.color.dark.neutralVariant[90],
      95: designTokens.color.dark.neutralVariant[95],
      98: designTokens.color.dark.neutralVariant[98],
      99: designTokens.color.dark.neutralVariant[99],
      100: designTokens.color.dark.neutralVariant[100],
    },
    accent: {
      0: designTokens.color.dark.accent[0],
      2: designTokens.color.dark.accent[2],
      5: designTokens.color.dark.accent[5],
      10: designTokens.color.dark.accent[10],
      15: designTokens.color.dark.accent[15],
      20: designTokens.color.dark.accent[20],
      25: designTokens.color.dark.accent[25],
      30: designTokens.color.dark.accent[30],
      35: designTokens.color.dark.accent[35],
      40: designTokens.color.dark.accent[40],
      50: designTokens.color.dark.accent[50],
      60: designTokens.color.dark.accent[60],
      65: designTokens.color.dark.accent[65],
      70: designTokens.color.dark.accent[70],
      75: designTokens.color.dark.accent[75],
      80: designTokens.color.dark.accent[80],
      85: designTokens.color.dark.accent[85],
      90: designTokens.color.dark.accent[90],
      95: designTokens.color.dark.accent[95],
      98: designTokens.color.dark.accent[98],
      99: designTokens.color.dark.accent[99],
      100: designTokens.color.dark.accent[100],
    },

    surface: {
      surface: designTokens.color.dark.schemes.surface,
      onSurface: designTokens.color.dark.schemes.onSurface,
      surfaceVariant: designTokens.color.dark.schemes.surfaceVariant,
      onSurfaceVariant: designTokens.color.dark.schemes.onSurfaceVariant,
      outline: designTokens.color.dark.schemes.outline,
    },
    inverseSurface: {
      inverseSurface: designTokens.color.dark.schemes.inverseSurface,
      inverseOnSurface: designTokens.color.dark.schemes.inverseOnSurface,
      inversePrimary: designTokens.color.dark.schemes.inversePrimary,
    },

    // Extended colors
    extended: {
      success: designTokens.color.dark.extended.success,
      onSuccess: designTokens.color.dark.extended.onSuccess,
      successContainer: designTokens.color.dark.extended.successContainer,
      onSuccessContainer: designTokens.color.dark.extended.onSuccessContainer,
      warning: designTokens.color.dark.extended.warning,
      onWarning: designTokens.color.dark.extended.onWarning,
      warningContainer: designTokens.color.dark.extended.warningContainer,
      onWarningContainer: designTokens.color.dark.extended.onWarningContainer,
      info: designTokens.color.dark.extended.info,
      onInfo: designTokens.color.dark.extended.onInfo,
      infoContainer: designTokens.color.dark.extended.infoContainer,
      onInfoContainer: designTokens.color.dark.extended.onInfoContainer,
    },
    // State layer colors
    stateLayer: {
      surfaceOpacity8: designTokens.color.dark.stateLayer.surfaceOpacity8,
      surfaceOpacity12: designTokens.color.dark.stateLayer.surfaceOpacity12,
      surfaceOpacity16: designTokens.color.dark.stateLayer.surfaceOpacity16,
      errorOpacity8: designTokens.color.dark.stateLayer.errorOpacity8,
      errorOpacity12: designTokens.color.dark.stateLayer.errorOpacity12,
      errorOpacity16: designTokens.color.dark.stateLayer.errorOpacity16,
      primaryOpacity8: designTokens.color.dark.stateLayer.primaryOpacity8,
      primaryOpacity12: designTokens.color.dark.stateLayer.primaryOpacity12,
      primaryOpacity16: designTokens.color.dark.stateLayer.primaryOpacity16,
    },
  },
}



// Theme creation function
const createThemeByMode = (mode: PaletteMode, direction: 'ltr' | 'rtl' = 'rtl') => {
  const palette = mode === 'dark' ? darkPalette.palette : lightPalette.palette;
  
  return createTheme({
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
    // Add typography that respects RTL
    typography: {
      fontFamily: designTokens.fonts.primary + ', ' + designTokens.fonts.fallback,
      // MUI automatically handles text alignment for RTL
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

export default theme; 