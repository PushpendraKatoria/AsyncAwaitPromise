const fs = require('fs')

const filePath =  'psk.txt'

const data = fs.readFileSync(filePath, {encoding:'utf-8'});

console.log(data);

let sum = 0;
for(let i=0;i<=10;i++) {
    sum+=i;
}

console.log(sum);