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

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
    let arr = new Array(201).fill(0);
    for (let i = 0; i < d; i++) {
        arr[expenditure[i]]++;
    }

    let notice = 0;
    if (d%2 == 0) {
        for (let i = d; i < expenditure.length; i++) {
            let count = 0;
            let median = 0;
            for (let j = 0; j < arr.length; j++) {
                count += arr[j];
                if (count >= d/2 && median == 0) {
                    median += j;
                }
                if (count >= d/2 + 1) {
                    median += j;
                    if (expenditure[i] >= 2 * median / 2)
                        notice ++;
                    break;
                } 
            }
            arr[expenditure[i-d]]--;
            arr[expenditure[i]]++;
        }
    } else {
        for (let i = d; i < expenditure.length; i++) {
            let count = 0;
            let median = 0;
            for (let j = 0; j < arr.length; j++) {
                count += arr[j];
                if (count >= Math.ceil(d/2)) {
                    median += j;
                    if (expenditure[i] >= 2 * median) {
                        notice ++;
                        break;
                    } 
                }
            }
            arr[expenditure[i-d]]--;
            arr[expenditure[i]]++;
        }
    }
    return notice;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
