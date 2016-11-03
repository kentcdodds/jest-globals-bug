const isObject = require('.')

test('isObject', () => {
  expect(isObject({})).toBe(true)
})
