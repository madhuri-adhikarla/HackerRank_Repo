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

// Complete the cutTheSticks function below.
function cutTheSticks(arr) {
    arr = arr.sort();    
    var result = [];
    var length = arr.length
    result.push(length);
    var value = arr[0];
    var count = 1;
    
    for(var i = 1; i < arr.length; i++){
        if(value === arr[i]){
            count++;
        }else{
            value = arr[i];
            length  = length - count
            result.push(length);
            count = 1;
        }
        
    }
    return result;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr,n);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
