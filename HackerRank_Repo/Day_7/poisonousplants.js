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

// Complete the poisonousPlants function below.
function poisonousPlants(p) {
    let iteration=0,stack=[],lastLength=0;
    while(lastLength!=p.length){
        stack.push(p[0]);
        for(let i=0;i<p.length-1;i++) {
            if(p[i+1]<=p[i])
                stack.push(p[i+1]);
        }
            
        lastLength=p.length;
        p=stack;
        iteration++;
        stack=[];
    } //while loop
    return (iteration-1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = readLine().split(' ').map(pTemp => parseInt(pTemp, 10));

    let result = poisonousPlants(p);

    ws.write(result + "\n");

    ws.end();
}
