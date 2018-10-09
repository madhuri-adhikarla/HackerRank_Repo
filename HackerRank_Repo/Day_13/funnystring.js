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

// Complete the funnyString function below.
function funnyString(s) {
    var input=[];
    var rev=[];
    var diff1=[];
    var diff2=[];
    for(let i=0;i<s.length;i++) {
        input[i] = s.charCodeAt(i);
    }
    var revString = s.split("").reverse().join("");
    for(let i=0;i<revString.length;i++) {
        rev[i] = revString.charCodeAt(i);
    }
    
    for(let i=1;i<input.length;i++) {
        var val = Math.abs(input[i-1]-input[i]);
        diff1.push(val);
    }
    for(let i=1;i<rev.length;i++) {
        var val = Math.abs(rev[i-1]-rev[i]);
        diff2.push(val);
    }
    // console.log(diff1)
    // console.log(diff2)
    var count=0;
    for(let i=0;i<diff1.length;i++) {
        if(diff1[i]==diff2[i])
            count++;
    }
    // console.log(count)
    if(count===diff1.length)
        return "Funny";
    else
        return "Not Funny";
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
