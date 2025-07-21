// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/', 'locales/', 'node_modules/'],
  },
  ...tseslint.configs.recommended,
  perfectionist.configs['recommended-natural'],
  {
    rules: {
      'no-duplicate-imports': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        },
      ],
      'perfectionist/sort-imports': [
        'warn',
        {
          type: 'natural',
          order: 'asc',
          groups: [
            'clsx',
            'style',
            'react',
            'tanstack',
            'mantine',
            'mrt',
            ['sibling', 'sibling-type', 'parent', 'parent-type'],
          ],
          customGroups: {
            // FIX:  maybe need to be fixed these regex
            value: {
              clsx: 'clsx',
              style: ['.*\\.module\\.css$'],
              react: ['react', 'react-*'],
              storybook: ['@storybook/.*'],
              tanstack: '@tanstack/.*',
              mantine: '@mantine/.*', //
              mrt: ['^./MRT_.*', '^../.*MRT_.*', '^../../src/.*'],
              faker: '@faker/.*',
            },
            type: {
              react: 'react',
            },
          },
        },
      ],
    },
  },
  storybook.configs['flat/recommended'],
);
