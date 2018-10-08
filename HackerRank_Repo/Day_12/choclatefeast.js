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

// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m){
    var totalChoc = 0;
    var initialChoc = parseInt(n/c);
    
    totalChoc += initialChoc;
    
    var noOfWrappers = initialChoc;
    var freeChocs = parseInt(noOfWrappers / m);
    var remainingWrappers = noOfWrappers % m;
    var newChocs = parseInt((remainingWrappers + freeChocs) / m);
    
    totalChoc += freeChocs + newChocs;
    
    // console.log(totalChoc);
    return totalChoc;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const ncm = readLine().split(' ');

        const n = parseInt(ncm[0], 10);

        const c = parseInt(ncm[1], 10);

        const m = parseInt(ncm[2], 10);

        let result = chocolateFeast(n, c, m);

        ws.write(result + "\n");
    }

    ws.end();
}
