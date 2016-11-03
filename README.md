# Jest globals bug

This is a reproduction of [#2048 in Jest](https://github.com/facebook/jest/issues/2048).

## Steps to reproduce:

1. clone repo
2. `yarn` (or `npm install`)
3. `npm run node` will run the `test.js` file with node
4. `npm run jest` will run the `index.test.js` file with jest
