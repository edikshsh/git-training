const path = require('path')

console.log(path.sep);

const fielpath = path.join('/content', 'subfolder', 'text.txt')
console.log(fielpath);

const base = path.basename(fielpath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);