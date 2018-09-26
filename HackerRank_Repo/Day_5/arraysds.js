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

// Complete the reverseArray function below.
function reverseArray(a) {
  var arr=[a.length];
    arr = a.reverse();
    var val="";
    for(let i=0;i<arr.length;i++){
        val = val + arr[i].toString() + " ";
    }
    return val;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);
    console.log(res);
    ws.write(res.join(' ') + '\n');

    ws.end();
}
