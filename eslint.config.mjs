import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals.js", "next/typescript.js"),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/jsx-no-undef': 'error', // Keep this as error - it's a real bug
      '@next/next/no-html-link-for-pages': 'warn',
    },
  },
];

export default eslintConfig;