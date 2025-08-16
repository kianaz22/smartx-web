# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SmartX Web is a TypeScript monorepo containing two React applications (Club and Evaluation) with shared packages for design system, API client, and utilities. Built with Turborepo, pnpm, Vite, and Material-UI.

## Essential Commands

### Development
```bash
# Start all applications (Club on :5173, Evaluation on :5174)
pnpm dev

# Start specific app
pnpm --filter @smartx/club dev
pnpm --filter @smartx/evaluation dev

# Start Storybook for design system
pnpm --filter @smartx/design-system storybook
```

### Building & Testing
```bash
# Build everything
pnpm build

# Build specific app/package
pnpm --filter @smartx/club build
pnpm --filter @smartx/evaluation build

# Run tests
pnpm test
pnpm --filter <package-name> test --watch
pnpm --filter <package-name> test --coverage

# Run single test file
pnpm --filter <package-name> test path/to/file.test.ts
```

### Code Quality
```bash
# Lint all packages
pnpm lint

# Type check
pnpm typecheck

# Format code
pnpm format

# Clean build artifacts
pnpm clean
```

## Architecture

### Monorepo Structure
- **Turborepo** orchestrates builds and caching across packages
- **pnpm workspaces** manages dependencies with `workspace:*` protocol
- Shared packages are TypeScript source imports (not built separately)

### Applications (`/apps`)
- **club** - Customer-facing application
- **evaluation** - Internal evaluation tools
- Both use Vite, React 18, React Router v6
- Each has independent routing and deployment

### Shared Packages (`/packages`)

#### `@smartx/design-system`
- Material-UI components with Emotion styling
- Storybook for component development
- Export paths: main index, `/theme`, `/components`

#### `@smartx/api-client`
- Axios for HTTP requests
- React Query for state management
- Provides `ApiProvider` wrapper and custom hooks

#### `@smartx/shared-hooks`
- Reusable React hooks (useDebounce, useLocalStorage)
- Framework-agnostic utilities

#### `@smartx/configs`
- Shared ESLint, Prettier, Jest, TypeScript configs
- Base configurations extended by all packages

### TypeScript Configuration
- Base config at `/tsconfig.base.json` with strict mode
- Path aliases configured for inter-package imports
- Each package extends base with specific settings
- `moduleResolution: bundler` with `allowImportingTsExtensions`

### Testing Strategy
- Jest with React Testing Library
- Per-package Jest configs extending shared preset
- Tests colocated with components (`.test.tsx` files)
- Mock service worker patterns for API testing

### Build Pipeline
- Turbo handles dependency ordering via `dependsOn`
- Parallel builds where possible
- Outputs: `dist/` for apps, `storybook-static/` for design system
- IIS-ready `web.config` included in app builds

## Development Patterns

### Adding Dependencies
```bash
# Add to specific package
pnpm --filter @smartx/club add package-name

# Add workspace dependency
pnpm --filter @smartx/club add @smartx/new-package@workspace:*

# Add dev dependency
pnpm --filter @smartx/club add -D package-name
```

### Component Development Flow
1. Create component in `design-system` with `.stories.tsx`
2. Test in Storybook isolation
3. Write tests using Testing Library
4. Import in apps via `@smartx/design-system`

### API Integration Pattern
1. Define API endpoints in `api-client/hooks`
2. Use React Query for caching and state
3. Wrap app with `ApiProvider`
4. Access via custom hooks (e.g., `usePing`)

### Environment Variables
- Vite-prefixed: `VITE_*` accessible in apps
- Per-app `.env` files with `.env.local` for overrides
- Common: `VITE_API_BASE_URL`, `VITE_APP_NAME`

## Important Notes

- All packages use ES modules (`"type": "module"`)
- Direct TypeScript imports between packages (no build step)
- Turbo caches aggressively - use `--force` to bypass
- VSCode configured for format/lint on save
- Tests must pass before committing (enforce locally)