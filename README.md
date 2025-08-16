# SmartX Web Monorepo

A modern monorepo setup using Turborepo, pnpm, and TypeScript for building scalable web applications.

## 🏗 Architecture

This monorepo contains:

### Apps
- **`apps/club`** - SmartX Club application (React + Vite)
- **`apps/evaluation`** - SmartX Evaluation application (React + Vite)

### Packages
- **`packages/design-system`** - Shared UI components (MUI + Emotion + Storybook)
- **`packages/api-client`** - API client with React Query and Axios
- **`packages/shared-hooks`** - Reusable React hooks
- **`packages/configs`** - Shared configuration files (ESLint, Prettier, TypeScript)

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm globally if you haven't already
npm install -g pnpm@8.15.4

# Install dependencies
pnpm install

# Copy environment files
cp .env.example .env
cp apps/club/.env.example apps/club/.env
cp apps/evaluation/.env.example apps/evaluation/.env
```

## 📦 Development

### Run all apps in development mode
```bash
pnpm dev
```

This will start:
- Club app on http://localhost:5173
- Evaluation app on http://localhost:5174
- Storybook on http://localhost:6006 (run separately with `pnpm --filter @smartx/design-system storybook`)

### Run specific app
```bash
# Run Club app only
pnpm --filter @smartx/club dev

# Run Evaluation app only
pnpm --filter @smartx/evaluation dev

# Run Storybook
pnpm --filter @smartx/design-system storybook
```

## 🛠 Commands

### Root commands
```bash
pnpm dev        # Start all apps in development mode
pnpm build      # Build all apps and packages
pnpm lint       # Lint all packages
pnpm test       # Run tests in all packages
pnpm typecheck  # Run TypeScript type checking
pnpm format     # Format code with Prettier
pnpm clean      # Clean all build artifacts
```

### Package-specific commands
```bash
# Run command in specific package
pnpm --filter <package-name> <command>

# Examples:
pnpm --filter @smartx/club build
pnpm --filter @smartx/design-system test
pnpm --filter @smartx/api-client lint
```

## 🏗️ Building for Production

```bash
# Build everything
pnpm -w build

# Build specific app
pnpm --filter @smartx/club build
pnpm --filter @smartx/evaluation build
```

Build outputs:
- Apps: `apps/*/dist/`
- Storybook: `packages/design-system/storybook-static/`

## 🚀 IIS Deployment

Each app includes a `web.config` file for IIS deployment with SPA routing support.

### Deployment steps:
1. Build the app: `pnpm --filter @smartx/club build`
2. Copy the entire `dist` folder to your IIS server
3. The `web.config` is automatically included in the build output
4. Configure IIS application pointing to the dist folder
5. Ensure IIS URL Rewrite module is installed

### IIS Requirements:
- IIS 7.0 or higher
- URL Rewrite Module 2.0
- .NET Framework 4.5 or higher

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm --filter <package-name> test --watch

# Run tests with coverage
pnpm --filter <package-name> test --coverage
```

## 📚 Adding New Packages

### Create a new app:
```bash
mkdir apps/new-app
cd apps/new-app
pnpm init
# Add necessary dependencies and configuration
```

### Create a new package:
```bash
mkdir packages/new-package
cd packages/new-package
pnpm init
# Add to workspace dependencies where needed
```

### Update workspace dependencies:
```bash
# Add shared package to an app
pnpm --filter @smartx/club add @smartx/new-package@workspace:*
```

## 🎨 Design System

Access Storybook to view and develop components:

```bash
pnpm --filter @smartx/design-system storybook
```

Build Storybook for deployment:
```bash
pnpm --filter @smartx/design-system build-storybook
```

## 🔧 Environment Variables

Each app uses Vite environment variables:

- `VITE_APP_NAME` - Application name
- `VITE_API_BASE_URL` - API base URL

Create `.env.local` files for local overrides (not committed to git).

## 📝 Code Style

This project uses:
- ESLint for linting
- Prettier for code formatting
- EditorConfig for consistent editor settings

VSCode will automatically:
- Format on save
- Fix ESLint issues on save
- Apply correct indentation and line endings

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm test`
4. Create a pull request

## 📦 CI/CD

GitHub Actions workflow runs on push and PR:
- Linting
- Type checking
- Tests
- Build verification
- Artifact upload

## 🛠 Troubleshooting

### Common Issues

**pnpm install fails**
```bash
# Clear pnpm cache
pnpm store prune

# Remove node_modules and reinstall
rm -rf node_modules
rm -rf apps/*/node_modules
rm -rf packages/*/node_modules
pnpm install
```

**Build errors**
```bash
# Clean and rebuild
pnpm clean
pnpm install
pnpm build
```

**TypeScript errors**
```bash
# Rebuild TypeScript project references
pnpm typecheck
```

## 📄 License

Private - All rights reserved

## 🆘 Support

For issues and questions, please contact the development team.