import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['dist/**'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: globals.jest,
    },
  },
  eslintConfigPrettier,
]);
