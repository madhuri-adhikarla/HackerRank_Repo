'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var maxPoints=scores[0];
    var minPoints = scores[0];
    var maxCount=0,minCount=0;
    var result = [];
    for(let i=0;i<scores.length;i++) {
      if(scores[i]>maxPoints) {
          maxPoints = scores[i];
          maxCount++;
      }else if(scores[i]<minPoints) {
          minPoints = scores[i];
          minCount++;
      }
    }
    result[0] = maxCount;
    result[1] =minCount;
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
