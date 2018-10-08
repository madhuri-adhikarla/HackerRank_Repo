'use strict';

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

function sum_digits_opt(n) {
    return (n % 10 + 
    Math.floor(n/10) % 10 + 
    Math.floor(n/100) % 10);
}
// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    var result = [];
    var val;
    for (let i = p; i <= q; i++) {
        var d = i.toString().length;
        var square = (i * i).toString();
        var squarelen = square.length;
        
        let val = parseInt(square.substring(squarelen - d));
        if (squarelen - d > 0) 
            val += parseInt(square.substring(0, squarelen - d));
        if (val == i) {
            result.push(i);
        }
    }
    if (result.length == 0)
        console.log('INVALID RANGE');
    else
        console.log(result.join(' '));
}



function main() {
    const p = parseInt(readLine(), 10);
    const q = parseInt(readLine(), 10);
    kaprekarNumbers(p, q);
}
