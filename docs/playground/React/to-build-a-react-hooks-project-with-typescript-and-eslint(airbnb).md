# To Build a React Hooks Project with TypeScript and ESLint(Airbnb)

## Start a project with create-react-app

```
npx create-react-app your-project-name --template typescript
```

Note: if you want to change an old project without TypeScript, you have to run the following scripts (this page assume you use yarn instead of npm):

```shell
yarn add -D typescript @types/react @types/react-dom
# Add testing types and node types if you need one
yarn add -D @types/jest @types/node
```

Set `{ "allowSyntheticDefaultImports": true }` in tsconfig.json to avoid a major code alteration ( use `import React from 'react';` instead of `import * as React from 'react';` )

## Add eslint-config-airbnb

```shell
yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Create a .eslintrc.js, here is an example

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react-hooks/recommended", "airbnb", "airbnb/hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".tsx", ".jsx", ".js"] },
    ],
  },
  settings: {
    "import/extentions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
```

Node: if you don't need hooks, just change `extends: ['plugin:react-hooks/recommended', 'airbnb', 'airbnb/hooks']` to `extends:['plugin:react/recommended', 'airbnb']`.

## Voilà

START CODING 🥳!
