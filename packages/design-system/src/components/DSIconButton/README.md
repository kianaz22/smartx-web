# DSIconButton

A design system icon button component that follows the same styling patterns as DSButton but is specifically designed for icon-only buttons.

## Features

- **Icon Only**: Accepts only a single icon element as children
- **Multiple Variants**: `filled`, `tonal`, `outlined`
- **Two Sizes**: `small` (40px), `standard` (48px)
- **Loading State**: Shows an animated spinner when `loading={true}`
- **Consistent Styling**: Uses the same design tokens and theme as DSButton
- **Accessible**: Built on top of MUI's IconButton for accessibility

## Usage

```tsx
import { DSIconButton } from '@smartx/design-system';
import SearchIcon from '@mui/icons-material/Search';

// Basic usage - only pass an icon
<DSIconButton>
  <SearchIcon />
</DSIconButton>

// With variant
<DSIconButton buttonVariant="tonal">
  <FavoriteIcon />
</DSIconButton>

// With size
<DSIconButton buttonSize="small">
  <SettingsIcon />
</DSIconButton>

// Loading state
<DSIconButton loading>
  <SearchIcon />
</DSIconButton>

// Disabled state
<DSIconButton disabled>
  <DeleteIcon />
</DSIconButton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `buttonVariant` | `'filled' \| 'tonal' \| 'outlined'` | `'filled'` | The visual style variant |
| `buttonSize` | `'small' \| 'standard'` | `'standard'` | The size of the button |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `disabled` | `boolean` | `false` | Disables the button |
| `children` | `ReactElement` | - | **Required**: A single icon element (e.g., Material-UI icon) |

## Important Notes

- **Icon Only**: This component is designed specifically for icon buttons. It only accepts a single icon element as children.
- **No Text**: Unlike DSButton, this component cannot display text content.
- **No Start/End Icons**: The `startIcon` and `endIcon` props are not available as they don't make sense for icon-only buttons.
- **Limited Variants**: Only supports `filled`, `tonal`, and `outlined` variants (no `text` variant).

## Design Decisions

- **Square Dimensions**: Icon buttons are always square (width = height) for consistent icon placement
- **Shared Styling**: Uses the same color scheme, border radius, and transitions as DSButton
- **Loading Spinner**: Clean, rotating spinner animation that fits well in icon button context
- **Size Mapping**: 
  - Small: 40px × 40px
  - Standard: 48px × 48px

## Accessibility

- Inherits all accessibility features from MUI's IconButton
- Supports keyboard navigation
- Proper ARIA attributes
- Focus management

## Examples

See the Storybook stories for interactive examples of all variants, sizes, and states.
