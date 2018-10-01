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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the twoStacks function below.
 */
function twoStacks(x, a, b) {
   var countB = 0;
        var sum = 0;
        while (countB < b.length && sum + b[countB] <= x) {
            sum += b[countB];
            countB++;
        }

        var maxScore = countB;
        for (let countA = 1; countA <= a.length; countA++) {
            sum += a[countA - 1];

            while (sum > x && countB > 0) {
                countB--;
                sum -= b[countB];
            }

            if (sum > x) {
                break;
            }

            maxScore = Math.max(maxScore, countA + countB);
        }
        return maxScore;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const nmx = readLine().split(' ');

        const n = parseInt(nmx[0], 10);

        const m = parseInt(nmx[1], 10);

        const x = parseInt(nmx[2], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

        let result = twoStacks(x, a, b);

        ws.write(result + "\n");
    }

    ws.end();
}
