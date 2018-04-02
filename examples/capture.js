const { snapshotToJSON } = require('../src/index')

const [, , filename, url] = process.argv

snapshotToJSON(filename, url, function () {
  process.exit(0)
})