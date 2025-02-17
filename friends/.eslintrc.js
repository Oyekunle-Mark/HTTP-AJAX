module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": 0,
    "quotes": 0,
    "arrow-parens": 0,
    "no-console": 0,
    "object-shorthand": 0,
    "comma-dangle": 0,
    "react/button-has-type": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-one-expression-per-line": 0
  }
};
