const { readFile, writeFile } = require('fs')

console.log('start')
let d = 4
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', asdf)
})
console.log('starting next task')

function asdf (err, result)  {
  if (err) {
    console.log(err)
    return
  }
  const second = result
  writeFile(
    './content/result-async.txt',
    `Here is the result : ${first}, ${second}`,
    (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      const a = 1;
      var b = 2;
      let c = 3;
      console.log(d);
      console.log('done with this task')
    }
  )
}