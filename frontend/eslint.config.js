// Minimal ESLint flat config for the React + Vite frontend. `npm run lint`.
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  { ignores: ['dist/', 'node_modules/'] },

  {
    files: ['src/**/*.{js,jsx}'],
    ...js.configs.recommended,

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      // React
      'react/jsx-uses-vars': 'error',

      // JavaScript
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
        },
      ],

      // Disable this React Hooks rule for this project
      'react-hooks/set-state-in-effect': 'off',
    },
  },

  // Test files get Vitest globals.
  {
    files: ['src/**/*.test.{js,jsx}', 'src/test/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        describe: true,
        it: true,
        expect: true,
        vi: true,
        beforeEach: true,
        afterEach: true,
      },
    },
  },
];