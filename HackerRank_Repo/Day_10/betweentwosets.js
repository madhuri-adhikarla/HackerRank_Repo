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



function gcd(a,b) {
        while (b > 0) {
            var temp = b;
            b = a % b; 
            a = temp;
        }
        return a;
    }
function lcm(a,b) {
        return a * (b / gcd(a, b));
    }
function getTotalX(a, b) {
    var count=0;
    var first = a[0];
    for (let i = 1; i < a.length; i++) {
        first = lcm(first, a[i]);
    }
    var last = b[0];
    for (let i = 1; i < b.length; i++) {
        last = gcd(last, b[i]);
    }
    console.log(first+" "+last);
    for(var i=first,j=1;i<=last;i=first*j) {
        if(last%i==0) {
                count++;
           
        }
        j++;
    }
    return count;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}