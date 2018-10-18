'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let result = 0
  let move = [];
  let compare = q.slice('').sort((a,b) => a-b)
  while(q.join('') !== compare.join('')){
    for(var i = 0; i < q.length - 1; i++) {
      if(q[i] > q[i+1]) {
        if(move[q[i]] === 2){
          console.log('Too chaotic')
          return
        } else if(move[q[i]] === 1) {
          move[q[i]]++
        } else {
          move[q[i]] = 1
        }

        let temp = q[i];
        q[i] = q[i + 1]
        q[i + 1] = temp
        result++
      }
    }
  }
  console.log(result)
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
