# @crackeddevs/eslint-config

Shared ESLint and Prettier configuration for CrackedDevs projects.

## Features

- **ESLint v9 Flat Config**: Modern ESLint configuration using the new flat config format
- **TypeScript Support**: Full TypeScript linting rules
- **React Support**: React-specific linting rules
- **Next.js Compatible**: Works seamlessly with Next.js projects
- **Prettier Integration**: Pre-configured to work with Prettier
- **Strict Rules**: Enforces code quality and consistency

## Installation

```bash
npm install --save-dev @crackeddevs/eslint-config
```

## Peer Dependencies

This package requires the following peer dependencies:

```json
{
  "eslint": "^9.0.0",
  "prettier": "^3.0.0"
}
```

## Usage

### ESLint Configuration

Create an `eslint.config.mjs` file in your project root:

```javascript
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const crackeddevsConfig = await import('@crackeddevs/eslint-config');

const eslintConfig = [
  ...crackeddevsConfig.default,
  // Add your project-specific configs here
  ...compat.extends('next/core-web-vitals', 'next/typescript'), // For Next.js projects
];

export default eslintConfig;
```

### Prettier Configuration

Create a `.prettierrc` file in your project root:

```json
"@crackeddevs/eslint-config/prettier"
```

Or use the prettier config directly:

```javascript
// prettier.config.js
module.exports = require('@crackeddevs/eslint-config/prettier');
```

## Package Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Rules Included

### Core ESLint Rules
- `no-console`: Prevents console statements
- `no-debugger`: Prevents debugger statements
- `no-unused-vars`: Detects unused variables
- `prefer-const`: Enforces const over let when possible
- `no-var`: Prevents var usage
- `object-shorthand`: Enforces object shorthand
- `prefer-template`: Enforces template literals
- `arrow-spacing`: Enforces spacing around arrow functions
- `no-duplicate-imports`: Prevents duplicate imports
- `no-dupe-keys`: Prevents duplicate object keys

### TypeScript Rules
- `@typescript-eslint/no-unused-vars`: TypeScript-specific unused variable detection
- `@typescript-eslint/no-explicit-any`: Prevents explicit any usage
- `@typescript-eslint/no-non-null-assertion`: Prevents non-null assertions

### React Rules
- `react/no-unescaped-entities`: Prevents unescaped HTML entities
- `react/no-namespace`: Prevents React namespace usage
- `react/no-array-index-key`: Prevents array index as key

## Example Project

See the `example/` directory for a complete Next.js project setup using this configuration.

## License

MIT
