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

// Complete the insertionSort function below.
function insertionSort(arr) {
     var count = 0;
    var j=0;
   for (let i = 1; i < arr.length; ++i) {
        var tmp = arr[i];
        for ( j=i-1; j >= 0 && arr[j] > tmp; j--) {
            arr[j + 1] = arr[j];
            count++;
        }
        arr[j + 1] = tmp;
    }
    return count;

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = insertionSort(arr);

        ws.write(result + "\n");
    }

    ws.end();
}
