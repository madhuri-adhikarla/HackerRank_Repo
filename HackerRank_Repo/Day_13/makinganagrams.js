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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    let charMatched = 0;
    let s1Arr = s1.split('');
    let s2Arr = s2.split('');
    let deletionCount = s1Arr.length+s2Arr.length;
    for(let i=0;i<s1Arr.length;i++){
        for(let j=0;j<s2Arr.length;j++){
            if(s1Arr[i]===s2Arr[j]){
                charMatched+=2;
                s2Arr[j] = 0;
                break;
            }
        }
    }
    return deletionCount-charMatched;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
