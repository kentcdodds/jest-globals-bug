const obj = JSON.parse('{}')

test('should be an object', () => {
  expect(obj.constructor === Object).toBe(true)
})
