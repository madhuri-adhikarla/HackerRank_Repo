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

// Complete the minimumLoss function below.
function minimumLoss(price) {
  const indices = {};
  for (let i = 0; i < price.length; i++) {
    indices[price[i]] = i;
  }

  let result = Infinity;
  price.sort((a, b) => a - b);

  for (let i = 0; i < price.length - 1; i++) {
    const loss = price[i + 1] - price[i];
    if (indices[price[i + 1]] < indices[price[i]]) {
      if (loss < result) result = loss;
    }
  }

  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const price = readLine().split(' ').map(priceTemp => parseInt(priceTemp, 10));

    let result = minimumLoss(price);

    ws.write(result + "\n");

    ws.end();
}
