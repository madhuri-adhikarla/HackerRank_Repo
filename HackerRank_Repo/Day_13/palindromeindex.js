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

// Complete the palindromeIndex function below.
function palindromeIndex(s) {

    let i = 0;
    let j = s.length - 1;
    let canBeChanged = true;
    let index = -1;
    while(i < j) {
        if(s[i] !== s[j]) {
            if(canBeChanged) {
                canBeChanged = false;
                if(s[i+1] === s[j] && s[i+2] === s[j-1]) {
                    index = i;
                    i += 1;
                } else {
                    index = j
                    j -= 1;
                }
            } else {
                return -1;
            }
        } else {
            i += 1;
            j -= 1;
        }
    }
    
    return index;

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}