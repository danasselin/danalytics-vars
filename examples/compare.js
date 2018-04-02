const { compareSnapshot } = require('../src/index')

const [, , filename, env] = process.argv

compareSnapshot(filename, function () {
  process.exit(0)
}, env)