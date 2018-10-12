'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    let output = new Array(arr.length).fill('');
    let half = arr.length / 2;
    for (let i = 0; i < output.length; i++) {
        output[i] = [];
    }
    
    for (let i = 0; i < arr.length; i++) {
        let index = parseInt(arr[i][0], 10);
        if (i < half) {
            output[index].push('-');
        } else {
            output[index].push(arr[i][1]);
        }
    }

    for (let i = 0; i < output.length; i++) {
        output[i] = output[i].join(' ');
    }
    console.log(output.join(' ').trim());
}




function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
