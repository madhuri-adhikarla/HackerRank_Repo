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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the solve function below.
 */
function solve(t) {
   
    
    let score = [];
    for (let i = 0; i < t.length; i++) {
        score[i] = 0;
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] > 0 && t[i] < t.length) {
            score[(i - t[i] + 1 + t.length) % t.length]--;
            score[(i + 1) % t.length]++;
        }
    }
    
    let max = -1;
    let indx = -1;
    let sum = 0;
    for (let i = 0; i < t.length; i++) {
        sum += score[i];
        if (sum > max) {
            max = sum;
            indx = i;
        }
    }
    
    return indx + 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tCount = parseInt(readLine(), 10);

    const t = readLine().split(' ').map(tTemp => parseInt(tTemp, 10));

    let id = solve(t);

    ws.write(id + "\n");

    ws.end();
}