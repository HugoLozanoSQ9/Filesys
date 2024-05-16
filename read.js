const fs = require('node:fs')

const content = fs.readFileSync('ex.txt','utf-8')

console.log(content)