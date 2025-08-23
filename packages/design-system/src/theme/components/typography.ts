import { designTokens } from "../designTokens";
import { createTheme } from "@mui/material/styles";


const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 800,
      lg: 1440,
      xl: 1920,
    },
  },
});

export const customTypographyTheme = createTheme({
  ...baseTheme,
  typography: {
    fontFamily: designTokens.fonts.primary + ', ' + designTokens.fonts.fallback,
    displayLarge: {
      fontSize: designTokens.typography.mobile.displayLargeSize,
      fontWeight: designTokens.typography.mobile.displayLargeWeight,
      lineHeight: designTokens.typography.mobile.displayLargeHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.displayLargeSize,
        fontWeight: designTokens.typography.tablet.displayLargeWeight,
        lineHeight: designTokens.typography.tablet.displayLargeHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.displayLargeSize,
        fontWeight: designTokens.typography.desktop.displayLargeWeight,
        lineHeight: designTokens.typography.desktop.displayLargeHeight + 'px',
      },
    },
    displayMedium: {
      fontSize: designTokens.typography.mobile.displayMediumSize,
      fontWeight: designTokens.typography.mobile.displayMediumWeight,
      lineHeight: designTokens.typography.mobile.displayMediumHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.displayMediumSize,
        fontWeight: designTokens.typography.tablet.displayMediumWeight,
        lineHeight: designTokens.typography.tablet.displayMediumHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.displayMediumSize,
        fontWeight: designTokens.typography.desktop.displayMediumWeight,
        lineHeight: designTokens.typography.desktop.displayMediumHeight + 'px',
      },
    },
    displaySmall: {
      fontSize: designTokens.typography.mobile.displaySmallSize,
      fontWeight: designTokens.typography.mobile.displaySmallWeight,
      lineHeight: designTokens.typography.mobile.displaySmallHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.displaySmallSize,
        fontWeight: designTokens.typography.tablet.displaySmallWeight,
        lineHeight: designTokens.typography.tablet.displaySmallHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.displaySmallSize,
        fontWeight: designTokens.typography.desktop.displaySmallWeight,
        lineHeight: designTokens.typography.desktop.displaySmallHeight + 'px',
      },
    },
    headlineLarge: {
      fontSize: designTokens.typography.mobile.headlineLargeSize,
      fontWeight: designTokens.typography.mobile.headlineLargeWeight,
      lineHeight: designTokens.typography.mobile.headlineLargeHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.headlineLargeSize,
        fontWeight: designTokens.typography.tablet.headlineLargeWeight,
        lineHeight: designTokens.typography.tablet.headlineLargeHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.headlineLargeSize,
        fontWeight: designTokens.typography.desktop.headlineLargeWeight,
        lineHeight: designTokens.typography.desktop.headlineLargeHeight + 'px'            ,
      },
    },
    headlineMedium: {
      fontSize: designTokens.typography.mobile.headlineMediumSize,
      fontWeight: designTokens.typography.mobile.headlineMediumWeight,
      lineHeight: designTokens.typography.mobile.headlineMediumHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.headlineMediumSize,
        fontWeight: designTokens.typography.tablet.headlineMediumWeight,
        lineHeight: designTokens.typography.tablet.headlineMediumHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.headlineMediumSize,
        fontWeight: designTokens.typography.desktop.headlineMediumWeight,
        lineHeight: designTokens.typography.desktop.headlineMediumHeight + 'px',
      },
    },
    headlineSmall: {
      fontSize: designTokens.typography.mobile.headlineSmallSize,
      fontWeight: designTokens.typography.mobile.headlineSmallWeight,
      lineHeight: designTokens.typography.mobile.headlineSmallHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.headlineSmallSize,
        fontWeight: designTokens.typography.tablet.headlineSmallWeight,
        lineHeight: designTokens.typography.tablet.headlineSmallHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.headlineSmallSize,
        fontWeight: designTokens.typography.desktop.headlineSmallWeight,
        lineHeight: designTokens.typography.desktop.headlineSmallHeight + 'px',
      },
    },
    titleLarge: {
      fontSize: designTokens.typography.mobile.titleLargeSize,
      fontWeight: designTokens.typography.mobile.titleLargeWeight,
      lineHeight: designTokens.typography.mobile.titleLargeHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.titleLargeSize,
        fontWeight: designTokens.typography.tablet.titleLargeWeight,
        lineHeight: designTokens.typography.tablet.titleLargeHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.titleLargeSize,
        fontWeight: designTokens.typography.desktop.titleLargeWeight,
        lineHeight: designTokens.typography.desktop.titleLargeHeight + 'px',
      },
    },
    titleMedium: {
      fontSize: designTokens.typography.mobile.titleMediumSize,
      fontWeight: designTokens.typography.mobile.titleMediumWeight,
      lineHeight: designTokens.typography.mobile.titleMediumHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.titleMediumSize,
        fontWeight: designTokens.typography.tablet.titleMediumWeight,
        lineHeight: designTokens.typography.tablet.titleMediumHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.titleMediumSize,
        fontWeight: designTokens.typography.desktop.titleMediumWeight,
        lineHeight: designTokens.typography.desktop.titleMediumHeight + 'px'    ,
      },
    },
    titleSmall: {
      fontSize: designTokens.typography.mobile.titleSmallSize,
      fontWeight: designTokens.typography.mobile.titleSmallWeight,
      lineHeight: designTokens.typography.mobile.titleSmallHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.titleSmallSize,
        fontWeight: designTokens.typography.tablet.titleSmallWeight,
        lineHeight: designTokens.typography.tablet.titleSmallHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.titleSmallSize,
        fontWeight: designTokens.typography.desktop.titleSmallWeight,
        lineHeight: designTokens.typography.desktop.titleSmallHeight + 'px',
      },
    },
    labelLarge: {
      fontSize: designTokens.typography.mobile.labelLargeSize,
      fontWeight: designTokens.typography.mobile.labelLargeWeight,
      lineHeight: designTokens.typography.mobile.labelLargeHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.labelLargeSize,
        fontWeight: designTokens.typography.tablet.labelLargeWeight,
        lineHeight: designTokens.typography.tablet.labelLargeHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.labelLargeSize,
        fontWeight: designTokens.typography.desktop.labelLargeWeight,
        lineHeight: designTokens.typography.desktop.labelLargeHeight + 'px',
      },
    },
    labelMedium: {
      fontSize: designTokens.typography.mobile.labelMediumSize,
      fontWeight: designTokens.typography.mobile.labelMediumWeight,
      lineHeight: designTokens.typography.mobile.labelMediumHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.labelMediumSize,
        fontWeight: designTokens.typography.tablet.labelMediumWeight,
        lineHeight: designTokens.typography.tablet.labelMediumHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.labelMediumSize,
        fontWeight: designTokens.typography.desktop.labelMediumWeight,
        lineHeight: designTokens.typography.desktop.labelMediumHeight + 'px',
      },
    },
    labelSmall: {
      fontSize: designTokens.typography.mobile.labelSmallSize,
      fontWeight: designTokens.typography.mobile.labelSmallWeight,
      lineHeight: designTokens.typography.mobile.labelSmallHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.labelSmallSize,
        fontWeight: designTokens.typography.tablet.labelSmallWeight,
        lineHeight: designTokens.typography.tablet.labelSmallHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.labelSmallSize,
        fontWeight: designTokens.typography.desktop.labelSmallWeight,
        lineHeight: designTokens.typography.desktop.labelSmallHeight + 'px'   ,
      },
    },
    bodyLarge: {
      fontSize: designTokens.typography.mobile.bodyLargeSize,
      fontWeight: designTokens.typography.mobile.bodyLargeWeight,
      lineHeight: designTokens.typography.mobile.bodyLargeHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.bodyLargeSize,
        fontWeight: designTokens.typography.tablet.bodyLargeWeight,
        lineHeight: designTokens.typography.tablet.bodyLargeHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.bodyLargeSize,
        fontWeight: designTokens.typography.desktop.bodyLargeWeight,
        lineHeight: designTokens.typography.desktop.bodyLargeHeight + 'px',
      },
    },
    bodyMedium: {
      fontSize: designTokens.typography.mobile.bodyMediumSize,
      fontWeight: designTokens.typography.mobile.bodyMediumWeight,
      lineHeight: designTokens.typography.mobile.bodyMediumHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.bodyMediumSize,
        fontWeight: designTokens.typography.tablet.bodyMediumWeight,
        lineHeight: designTokens.typography.tablet.bodyMediumHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.bodyMediumSize,
        fontWeight: designTokens.typography.desktop.bodyMediumWeight,
        lineHeight: designTokens.typography.desktop.bodyMediumHeight + 'px',
      },
    },
    bodySmall: {
      fontSize: designTokens.typography.mobile.bodySmallSize,
      fontWeight: designTokens.typography.mobile.bodySmallWeight,
      lineHeight: designTokens.typography.mobile.bodySmallHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.bodySmallSize,
        fontWeight: designTokens.typography.tablet.bodySmallWeight,
        lineHeight: designTokens.typography.tablet.bodySmallHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.bodySmallSize,
        fontWeight: designTokens.typography.desktop.bodySmallWeight,
        lineHeight: designTokens.typography.desktop.bodySmallHeight + 'px',
      },
    },
    bodyXSmall: {
      fontSize: designTokens.typography.mobile.bodyXSmallSize,
      fontWeight: designTokens.typography.mobile.bodyXSmallWeight,
      lineHeight: designTokens.typography.mobile.bodyXSmallHeight + 'px',
      [baseTheme.breakpoints.up('sm')]: {
        fontSize: designTokens.typography.tablet.bodyXSmallSize,
        fontWeight: designTokens.typography.tablet.bodyXSmallWeight,
        lineHeight: designTokens.typography.tablet.bodyXSmallHeight + 'px',
      },
      [baseTheme.breakpoints.up('lg')]: {
        fontSize: designTokens.typography.desktop.bodyXSmallSize,
        fontWeight: designTokens.typography.desktop.bodyXSmallWeight,
        lineHeight: designTokens.typography.desktop.bodyXSmallHeight + 'px',
      },
    },
  },
});
