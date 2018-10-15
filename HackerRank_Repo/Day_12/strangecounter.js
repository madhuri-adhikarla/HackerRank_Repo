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

// Complete the strangeCounter function below.
function strangeCounter(t) {
let c = 3;
  while (t > c) {
    t -= c;
    c *= 2;
  }
  let result = c - t + 1;
  // console.log(result);
    return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    let result = strangeCounter(t);

    ws.write(result + "\n");

    ws.end();
}
