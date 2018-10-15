'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    // Complete this function
    arr.sort((a, b) => a - b);
    brr.sort((a, b) => a - b);
    let diff = [];
    let j = 0;
    for (let i=0; i<brr.length; i++) {
        if (j === arr.length || brr[i] !== arr[j]) {
            diff.push(brr[i]);
            continue;
        } else {
            j++;
        }
    }
    let res = [];
    let last = null;
    for (let i=0; i<diff.length; i++) {
        if (diff[i] !== last) {
            res.push(diff[i]);
            last = diff[i];
        }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
