const { readFile, writeFile } = require('fs')

const first = readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(error);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`,
        (err, result) => {
            if (err) {
                console.log(error);
                return;
            }
            console.log(result);
        })
    })
})
