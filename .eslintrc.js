module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: { jsx: true },
      sourceType: "module",
      tsconfigRootDir: __dirname,
      project: "./tsconfig.json",
    },
    plugins: ["prettier", "unused-imports"], // use plugin
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended", // as prettier has different set of rule,
      "plugin:prettier/recommended", // we use the recommended set
       "next", 
      "next/core-web-vitals"
    ],
    rules: {
      "prettier/prettier": "warn", // styling warning based on prettier
      "prefer-const": "warn", // const type is preferred
      "jsx-a11y/anchor-is-valid": "off",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": "warn",
      "react/no-unescaped-entities": "warn"
    },
    ignorePatterns: ["generated*"],
  };