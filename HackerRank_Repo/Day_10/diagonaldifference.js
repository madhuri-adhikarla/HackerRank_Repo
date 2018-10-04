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

// Complete the diagonalDifference function below.
function diagonalDifference(a) {
    var diff, primaryDiag=0 , secondaryDiag =0;
     for(let i = 0; i < a.length; i++){
      // Calculating the primary diagonal.
        primaryDiag += a[i][i];
      // Reversing the second dimension of array to calculate secondary diagonal.
        secondaryDiag += a[a.length -1 - i][i]
    }
    diff = Math.abs(primaryDiag - secondaryDiag); 
    return diff; 

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
