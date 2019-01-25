module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "space-in-parens": [0, "always"],
    "template-curly-spacing": [2, "always"],
    "array-bracket-spacing": [2, "always"],
    "object-curly-spacing": [2, "always"],
    "computed-property-spacing": [2, "always"],
    "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "quotes": [1, "single", "avoid-escape"],
    "no-use-before-define": [2, { "functions": false }],
    "semi": [0, "never"],
    "prefer-const": 1,
    "react/prefer-es6-class": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": [1],
    "class-methods-use-this": [1],
    "no-case-declarations": [1],
    "no-return-assign": [1],
    "no-param-reassign": [1],
    "no-shadow": [1],
    "camelcase": [1],
    "no-underscore-dangle": [0, "always"],
  }
};