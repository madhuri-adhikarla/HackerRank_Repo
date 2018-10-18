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

// Complete the flippingMatrix function below.
function flippingMatrix(matrix) {
    let n = matrix.length / 2
    let sum = 0
    for(let i=0; i<n; i++) {
        for(let j=0; j<n; j++) {
            let a = matrix[i][j]
            let b = matrix[2*n-1-i][j]
            let c = matrix[2*n-1-i][2*n-1-j]
            let d = matrix[i][2*n-1-j]
            a = a > b ? a : b
            a = a > c ? a : c
            a = a > d ? a : d
            sum += a
        }
    }
    return sum
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let matrix = Array(2*n);

        for (let i = 0; i < 2*n; i++) {
            matrix[i] = readLine().split(' ').map(matrixTemp => parseInt(matrixTemp, 10));
        }

        let result = flippingMatrix(matrix);

        ws.write(result + "\n");
    }

    ws.end();
}
