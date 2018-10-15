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

// Complete the hackerlandRadioTransmitters function below.
function hackerlandRadioTransmitters(x, k, n) {
       x = x.sort((a, b) => a - b);
    
    var i = 0;
    var result = 0;
    
    while (i < n) {
        result++;
        
        var j = i;
        
        while ((j + 1) < n && (x[i] + k) >= x[j+1]) {
            j++;
        }
                
        if (i == j) {
            i++;
        } else {
            var z = j;
                        
            while ((z + 1) < n && (x[j] + k) >= x[z+1]) {
                z++;
            }
            
            if (z == j) {
                i = j + 1;
            } else {
                i = z + 1;
            }
        }  
    }
    
    return result;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const x = readLine().split(' ').map(xTemp => parseInt(xTemp, 10));

    let result = hackerlandRadioTransmitters(x, k, n);

    ws.write(result + "\n");

    ws.end();
}
