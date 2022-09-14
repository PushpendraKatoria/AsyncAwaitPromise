const fs = require('fs')

const filePath =  'psk.txt'

fs.readFile(filePath, {encoding:'utf-8'}, (err,data)=> {
    console.log(data);
});

// console.log(data);

let sum = 0;
for(let i=0;i<=10;i++) {
    sum+=i;
}

console.log(sum);