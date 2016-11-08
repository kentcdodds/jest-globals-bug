const assert = require('assert')
const obj = JSON.parse('{}')
assert(obj.constructor === Object)
console.info('✅ passed')


