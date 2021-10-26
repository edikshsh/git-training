const {readFileSync,writeFileSync} = require('fs')

const {readFile,writeFile} = require('fs')


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})

// console.log(path.sep);

// const fielpath = path.join('/content', 'subfolder', 'text.txt')
// console.log(fielpath);

// const base = path.basename(fielpath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute);