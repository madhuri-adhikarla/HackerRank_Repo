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

function climbingLeaderboard(scores, alice) {

    var alliceRank = [];
    let uniqueScores = [...new Set(scores)]; //removes duplicate values in the array
    let rank = uniqueScores.length;
    for (let ascore of alice) {
        if (rank === 0) {
            alliceRank.push(rank + 1);
         }
         for (let i = rank - 1; i >= 0; i--) {
            if (ascore >= uniqueScores[i]) {
                 rank = i;
                if (i === 0) {
                    alliceRank.push(rank + 1);
                 }
            } else {
                alliceRank.push(rank + 1);
                i = 0;
            }   
        }
    }
    return alliceRank;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}