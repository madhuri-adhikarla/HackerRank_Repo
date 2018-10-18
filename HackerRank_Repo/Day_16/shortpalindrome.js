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

// Complete the shortPalindrome function below.
function shortPalindrome(s) {
    let m = 1000000007;
    let first = [];
    let second = [];
    let third = [];
    for (let i = 0; i < 26; i++) {
        first[i] = 0;
        second[i] = [];
        third[i] = 0;
        for (let j = 0; j < 26; j++) {
            second[i][j] = 0;
        }
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let current = s.charCodeAt(i) - 97;
        count = (count + third[current]) % m;
        for (let j = 0; j < 26; j++) {
            third[j] = (third[j] + second[j][current]) % m;
        }
        for (let j = 0; j < 26; j++) {
            second[j][current] = (second[j][current] + first[j]) % m;
        }
        first[current] = (first[current] + 1) % m;
    }
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = shortPalindrome(s);

    ws.write(result + "\n");

    ws.end();
}
