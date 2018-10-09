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

// Complete the anagram function below.
function anagram(s){
    var change = 0;
    if (s.length % 2 === 1) {
        return -1;
    } else {
        var s1 = s.slice(0,s.length/2);
        var s2 = s.slice(s.length/2,s.length);
        if(s1===s2) {
            return 0;
        }
        for (var i = 0; i < s1.length; i++){
            s2 = s2.replace(s1[i],"");
        }
        return s2.length;
    }
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}
