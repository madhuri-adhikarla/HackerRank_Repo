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

// Complete the gamingArray function below.
function gamingArray(arr) {
    /*
     * Write your code here.
     */
  let max = arr[0];
  let changes = 0;
  for (var i = 1; i < arr.length; i++) {
    let cur = arr[i];
    if (cur > max) {
      max = cur;
      changes++;
    }
  }
  if (changes % 2) return 'ANDY';
  else return 'BOB';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const arrCount = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = gamingArray(arr);

        ws.write(result + "\n");
    }

    ws.end();
}
