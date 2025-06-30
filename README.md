# @crackeddevs/eslint-config

Shared ESLint and Prettier configuration for CrackedDevs projects.

## Installation

```bash
npm install --save-dev @crackeddevs/eslint-config
```

## Usage

### Basic JavaScript/TypeScript

```json
// .eslintrc.js
module.exports = {
  extends: ['@crackeddevs/eslint-config/eslint']
};
```

```json
// .prettierrc.js
module.exports = require('@crackeddevs/eslint-config/prettier');
```

### TypeScript

```json
// .eslintrc.js
module.exports = {
  extends: ['@crackeddevs/eslint-config/typescript']
};
```

### React

```json
// .eslintrc.js
module.exports = {
  extends: ['@crackeddevs/eslint-config/react']
};
```

### Next.js

```json
// .eslintrc.js
module.exports = {
  extends: ['@crackeddevs/eslint-config/next']
};
```

## Available Configurations

- `eslint` - Base JavaScript configuration
- `typescript` - TypeScript configuration
- `react` - React + TypeScript configuration
- `next` - Next.js configuration
- `prettier` - Prettier configuration

## Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```
