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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    var temp;
    var val = arr[n-1];
    for(let i=n-1;i>=0;i--) {
        if(arr[i-1] > val) {
            arr[i] = arr[i-1];
        } else {
            arr[i] = val; 
            var res = arr.join(" ");
            console.log(res);
            break;
        }
        var res = arr.join(" ");
        console.log(res);
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
