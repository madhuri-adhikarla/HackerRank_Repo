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

// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    let res = [];
    let empty = 0;
    let r = 0;
    let array = [];
    let space = false;
    
    for(let i=0;i<b.length;i++) {
        if(array[b[i]]) {
            array[b[i]] += 1;
        } else {
            array[b[i]] = 1;
        }
    }
    
    for(let i=0;i<b.length;i++) {
        if(b[i] != '_' && array[b[i]] == 1) {
            return "NO";
        }
    }
    
     for(let i=0;i<b.length;i++) {
        if(b[i] === '_') {
            return "YES";
        }
    }
    
    for(let i=1;i<b.length-1;i++) {
        if(b[i] != b[i+1] && b[i] != b[i-1]) {
            return "NO";
        }
    }

    return "YES";

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}
