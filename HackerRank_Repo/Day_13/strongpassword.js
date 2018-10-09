'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
 let numbers = "0123456789"
let lower_case = "abcdefghijklmnopqrstuvwxyz"
let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let special_characters = "!@#$%^&*()-+"
let count = 4;
let num,lf,uf,sf = false;
for(let i = 0; i < password.length; i++){
  if(numbers.includes(password[i]) && !num) {
      count--; 
      num = true;
  }
  else if(lower_case.includes(password[i]) && !uf) {
      count--;
      uf = true;
  } 
  else if(upper_case.includes(password[i]) && !lf) {
      count--; 
      lf = true;
  } 
  else if(special_characters.includes(password[i]) && !sf) {
      count--; 
      sf = true;
  }  
}
    var val = n+count;
    if(val < 6)
        count = count + (6-val);
return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
