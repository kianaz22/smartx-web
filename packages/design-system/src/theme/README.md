# 3-Layer Theme System for Typography

This design system implements a 3-layer theme approach that allows you to use native HTML elements with custom typography variants automatically applied.

## Layer Structure

### Layer 1: Native HTML Elements (Automatic)
Native HTML elements like `<h1>`, `<h2>`, `<p>`, etc. automatically get your custom typography styles applied through CSS-in-JS overrides.

```tsx
// These will automatically use your custom variants
<h1>This uses displayLarge variant</h1>
<h2>This uses displayMedium variant</h2>
<h3>This uses displaySmall variant</h3>
<h4>This uses headlineLarge variant</h4>
<p>This uses bodyMedium variant</p>
<span>This uses bodySmall variant</span>
```

### Layer 2: MUI Component Variants
MUI components can use both standard MUI typography variants and your custom variants.

```tsx
// Standard MUI variants (mapped to your custom variants)
<Typography variant="h1">Uses displayLarge</Typography>
<Typography variant="h2">Uses displayMedium</Typography>
<Typography variant="body1">Uses bodyMedium</Typography>

// Your custom variants
<Typography variant="displayLarge">Explicit displayLarge</Typography>
<Typography variant="headlineMedium">Explicit headlineMedium</Typography>
<Typography variant="bodyLarge">Explicit bodyLarge</Typography>
```

### Layer 3: Explicit Custom Variants
Use your custom variants directly for maximum control.

```tsx
// Direct usage of custom variants
<Typography variant="displayLarge">Custom display variant</Typography>
<Typography variant="headlineMedium">Custom headline variant</Typography>
<Typography variant="bodyLarge">Custom body variant</Typography>
```

## Mapping Configuration

The theme automatically maps native elements to your custom variants:

| Native Element | Custom Variant | Use Case |
|----------------|----------------|----------|
| `h1` | `displayLarge` | Main page titles |
| `h2` | `displayMedium` | Section headers |
| `h3` | `displaySmall` | Subsection headers |
| `h4` | `headlineLarge` | Card titles |
| `h5` | `headlineMedium` | Small headers |
| `h6` | `headlineSmall` | Minor headers |
| `p` | `bodyMedium` | Body text |
| `span` | `bodySmall` | Inline text |
| `a` | `labelLarge` | Links |
| `button` | `labelLarge` | Button text |
| `label` | `labelMedium` | Form labels |
| `caption` | `labelSmall` | Captions |
| `overline` | `labelSmall` | Overlines |

## Usage Examples

### Basic HTML Usage
```tsx
function MyComponent() {
  return (
    <div>
      <h1>Main Title</h1>
      <h2>Section Header</h2>
      <p>This paragraph automatically uses bodyMedium styling.</p>
      <span>This span uses bodySmall styling.</span>
    </div>
  );
}
```

### MUI Component Usage
```tsx
import { Typography } from '@mui/material';

function MyComponent() {
  return (
    <div>
      {/* These use your custom variants automatically */}
      <Typography variant="h1">Main Title</Typography>
      <Typography variant="h2">Section Header</Typography>
      <Typography variant="body1">Body text</Typography>
      
      {/* Or use custom variants explicitly */}
      <Typography variant="displayLarge">Custom Display</Typography>
      <Typography variant="headlineMedium">Custom Headline</Typography>
    </div>
  );
}
```

### Mixed Usage
```tsx
function MyComponent() {
  return (
    <div>
      {/* Native HTML with automatic styling */}
      <h1>Native H1 with displayLarge</h1>
      
      {/* MUI component with mapped variant */}
      <Typography variant="h2">MUI H2 with displayMedium</Typography>
      
      {/* Explicit custom variant */}
      <Typography variant="headlineLarge">Explicit headlineLarge</Typography>
    </div>
  );
}
```

## Benefits

1. **Automatic Styling**: Native HTML elements automatically get your design system typography
2. **Consistent Design**: All text elements follow your design tokens
3. **Flexible Usage**: Use native HTML, MUI components, or custom variants as needed
4. **Maintainable**: Centralized typography configuration
5. **Responsive**: All variants automatically adapt to breakpoints

## Customization

To modify the mapping between native elements and custom variants, update the `components.MuiCssBaseline.styleOverrides` section in your theme configuration.

## Best Practices

1. **Use native HTML elements** for semantic markup when you want automatic styling
2. **Use MUI Typography components** when you need MUI-specific features
3. **Use explicit custom variants** when you need precise control
4. **Maintain semantic hierarchy** - use h1-h6 for headings, p for paragraphs
5. **Leverage the automatic mapping** to reduce manual styling code
