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

// Complete the counterGame function below.
function counterGame(n) {
    let richardTurn = false;
    let a = n;
    while (true) {
        if (a===1) return richardTurn? "Louise":"Richard";
        let x = 1;
        while (x*2<=a) {
            x=x*2;
        }
        if (a===x) {
            a/=2;
        } else {
            a-=x;
        }
        richardTurn = !richardTurn;
    }    
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = counterGame(n);

        ws.write(result + "\n");
    }

    ws.end();
}
