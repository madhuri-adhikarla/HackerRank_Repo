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

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    // Complete this function
    var max = 0;
    var diff = 0;
    c.sort((a,b) => a - b);
    for (var i = 0; i < c.length; i++) {
        if (i === 0) {
            diff = c[i];
            if (diff > max) {
                max = diff;
            }
        }
        
        if (i === c.length - 1) {
            diff = (n - 1) - c[i];
            if (diff > max) {
                max = diff;
            }
        }
        
        if (c[i + 1] && c[i + 1] - c[i] > 1) {
            diff = Math.floor((c[i + 1] - c[i]) / 2);
            if (diff > max) {
                max = diff;
            }
        }
    }
    
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}
