const off = 0;
const warn = 1;
const error = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
    "jest/globals": true,
    node: true,
  },
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    ecmaVersion: 2015,
    ecmaFeatures: { legacyDecorators: true },
    requireConfigFile: false,
  },
  plugins: ["jest", "prettier-vue", "promise"],
  extends: ["eslint:recommended", "plugin:prettier-vue/recommended", "plugin:vue/vue3-recommended"],
  settings: {
    "prettier-vue": {
      // ignoring template tag
      SFCBlocks: {
        template: false,
      },
    },
  },
  rules: {
    "jest/no-disabled-tests": warn,
    "jest/no-focused-tests": error,
    "jest/no-identical-title": error,
    "jest/prefer-to-have-length": warn,
    "jest/valid-expect": error,
    "no-console": process.env.NODE_ENV === "production" ? error : off,
    "no-debugger": process.env.NODE_ENV === "production" ? error : off,
    "prettier-vue/prettier": [error],
    "require-await": error,
    "no-tabs": ["error", { allowIndentationTabs: false }],
    "vue/component-name-in-template-casing": [error, "PascalCase"],
    "vue/max-attributes-per-line": [
      error,
      {
        singleline: 4,
        multiline: 1,
      },
    ],
  },
};
