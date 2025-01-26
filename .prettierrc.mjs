/** @type {import("prettier").Config} */

export default {
  "printWidth": 160,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "overrides": [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ["prettier-plugin-astro"],
}
