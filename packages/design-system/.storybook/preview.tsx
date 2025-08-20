import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../src/theme';
import { CssBaseline } from '@mui/material';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px',
          },
        },
      },
    },
  },
  globalTypes: {
    direction: {
      description: 'Text direction',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'globe',
        items: ['ltr', 'rtl'],
        title: 'Direction',
      },
    },
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        title: 'Theme',
      },
    },
  },
  decorators: [
    (Story, context) => {
      const direction = context.globals.direction;
      const theme = context.globals.theme;
      
      return (
        <ThemeProvider defaultMode={theme} defaultDirection={direction}>
          <CssBaseline />
          <div dir={direction} style={{ minHeight: '100vh' }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;