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

// Complete the pickingNumbers function below.
function pickingNumbers(a,n) {
        var count;
        var max = Number.MIN_VALUE;
        a.sort();
        for(let i = 0; i < n; i++) {
            count = 0;
            for(let j = i; j < n; j++) {
                if(Math.abs(a[i] - a[j]) > 1) {
                    break;
                }
                else {
                    count++;
                }
            }
            
            if(count > max) {
                max = count;
            }
        }
        
       return max;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a,n);

    ws.write(result + "\n");

    ws.end();
}
