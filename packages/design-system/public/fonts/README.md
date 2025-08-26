# Font Files

This directory should contain the IRANYekanXFaNum font files for the design system.

## Required Font Files

To properly display the primary font in Storybook and applications, you need to add the following font files:

- `IRANYekanXFaNum-Thin.woff2` (weight: 100)
- `IRANYekanXFaNum-ExtraLight.woff2` (weight: 200)
- `IRANYekanXFaNum-Light.woff2` (weight: 300)
- `IRANYekanXFaNum-Regular.woff2` (weight: 400)
- `IRANYekanXFaNum-Medium.woff2` (weight: 500)
- `IRANYekanXFaNum-SemiBold.woff2` (weight: 600)
- `IRANYekanXFaNum-Bold.woff2` (weight: 700)
- `IRANYekanXFaNum-ExtraBold.woff2` (weight: 800)
- `IRANYekanXFaNum-Black.woff2` (weight: 900)

## Alternative: WOFF Format

If WOFF2 is not available, you can also use WOFF format:
- `IRANYekanXFaNum-Thin.woff`
- `IRANYekanXFaNum-ExtraLight.woff`
- `IRANYekanXFaNum-Light.woff`
- `IRANYekanXFaNum-Regular.woff`
- `IRANYekanXFaNum-Medium.woff`
- `IRANYekanXFaNum-SemiBold.woff`
- `IRANYekanXFaNum-Bold.woff`
- `IRANYekanXFaNum-ExtraBold.woff`
- `IRANYekanXFaNum-Black.woff`

## How to Add Font Files

1. Place the font files in this directory
2. Make sure the filenames match exactly (case-sensitive)
3. The fonts will be automatically loaded by the CSS in `src/theme/fonts.css`

## Fallback

If no font files are found, the system will fall back to the fallback fonts defined in `designTokens.ts`:
- `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
