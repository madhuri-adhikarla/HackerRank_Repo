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
    let result = [];
    for (var i = p; i <= q; i++) {
        let d = i.toString().length;
        let square = (i * i).toString();
        let squarelen = square.length;
        
        let rhs = parseInt(square.substring(squarelen - d));
        if (squarelen - d > 0) 
            rhs += parseInt(square.substring(0, squarelen - d));
        if (rhs == i) {
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
