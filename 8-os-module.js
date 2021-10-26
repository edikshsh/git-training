const os = require('os')

//user info
const user = os.userInfo()
console.log(user);

//system uptime is seconds
console.log(`The system uptime is ${os.uptime} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOs);