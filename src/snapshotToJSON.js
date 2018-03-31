const captureSnapshot = require('./captureSnapshot')
const { saveToJSON } = require('./util')

const [ , , name, url ] = process.argv

captureSnapshot(url, saveToJSON.bind(null, name))
