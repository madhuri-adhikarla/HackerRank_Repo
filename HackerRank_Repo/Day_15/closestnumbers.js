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

// Complete the closestNumbers function below.
function closestNumbers(arr ,n) {
   arr.sort(function (a, b) { return a - b;});
    
    var results = [];
    var dif = 0;
    var min = Number.MAX_SAFE_INTEGER;
    
    for (var i = 1; i < n; i++) {
        
        dif = arr[i] - arr[i - 1];
        
        if (dif <= min) {
            
            if (dif < min) results = [];
            
            results.push(arr[i-1]);
            results.push(arr[i]);
            
            min = dif;
            
        }
        
    }
    
   return results;
    
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr,n);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
