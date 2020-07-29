module.exports = {
  parser: "babel-eslint",
  rules: {
    "no-unused-vars": "warn",
    "import/extensions": 0,
    "no-param-reassign": 0,
    "import/no-unresolved": 0,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier", "react"],
};
