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

// Complete the encryption function below.
/*function encryption(s) {
     s = s.split(' ').join(''); 
    var length = s.length;
    var splitInput = parseInt(Math.sqrt(length));
    var output="";
    var j=0;
    while(j<length) {
        console.log(j)
        for(let i=j;i<j+splitInput;i++) {
              output+= input.charAt(i);
       }
        output = output+ " ";
        // console.log(output);
        j=j+splitInput;

    }
    return output;
} */

function encryption(s) {
    s = s.split(' ').join(''); 
    let column = Math.ceil(Math.sqrt(s.length)); 
    // let row = Math.floor(Math.sqrt(s.length)); 
    let result = ''; 
    for (let i=0; i<column; i++) {
        for (let j=i; j<s.length; j += column) {
            result += s[j];
        }
        result += ' '; 
    }
    return result; 
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
