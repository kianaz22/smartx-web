# RTL Support in Design System

This design system provides comprehensive RTL (Right-to-Left) support for internationalization, particularly for languages like Arabic, Hebrew, and Persian.

## Features

- **Automatic RTL Layout**: MUI components automatically adjust their layout for RTL languages
- **Icon Positioning**: Start and end icons are automatically positioned correctly for RTL
- **Text Direction**: Text direction is automatically set based on the theme direction
- **Component Overrides**: RTL-specific styling for all major components

## Usage

### Basic Setup

```tsx
import { ThemeProvider, RTLProvider } from '@smartx/design-system';

function App() {
  return (
    <ThemeProvider defaultMode="light" defaultDirection="rtl">
      <RTLProvider direction="rtl">
        {/* Your app content */}
      </RTLProvider>
    </ThemeProvider>
  );
}
```

### Dynamic Direction Switching

```tsx
import { useTheme } from '@smartx/design-system';

function DirectionToggle() {
  const { direction, toggleDirection } = useTheme();
  
  return (
    <button onClick={toggleDirection}>
      Current: {direction === 'rtl' ? 'RTL' : 'LTR'}
    </button>
  );
}
```


## How It Works

1. **Theme Direction**: The theme includes a `direction` property that can be 'ltr' or 'rtl'
2. **RTL Provider**: Uses Emotion's cache with MUI's RTL plugin for proper CSS generation
3. **Component Overrides**: MUI components automatically adjust their behavior based on the theme direction
4. **Icon Positioning**: Start and end icons are automatically swapped in RTL mode
5. **Text Alignment**: Text alignment is automatically adjusted for RTL languages

## Supported Components

- Buttons (with start/end icons)
- Icon Buttons
- Text Fields
- Form Controls
- Lists
- Navigation (Tabs, etc.)
- All other MUI components

## Best Practices

1. **Use startIcon/endIcon**: Instead of left/right positioning, use MUI's startIcon/endIcon props
2. **Avoid Hardcoded Directions**: Use the theme direction or utility functions instead
3. **Test Both Directions**: Always test your components in both LTR and RTL modes

## Browser Support

RTL support works in all modern browsers that support CSS logical properties and MUI's RTL plugin.
