const Module = require('module')
const path = require('path')
module.exports = requireFromString('fake-thing.js', `
  module.exports = function isObject(obj) {
    return obj.constructor === Object
  }
`)

/*
 * copied and modified from require-from-string
 */
function requireFromString(filename, code) {
  const m = new Module(filename, module.parent)
  m.filename = filename
  m.paths = Module._nodeModulePaths(path.dirname(filename))
  m._compile(code, filename)
  return m.exports
}
