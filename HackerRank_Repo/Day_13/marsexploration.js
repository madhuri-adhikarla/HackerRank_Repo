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

// Complete the marsExploration function below.
function marsExploration(s) {
    var index = 1;
    var count = 0;
    for (var i = 0; i < s.length; i++){
        if (index === 1){
            if (s.charAt(i) != "S"){
                count += 1;
            }
        } else if (index === 2) {
            if (s.charAt(i) != "O"){
                count += 1;
            }
        } else if (index === 3) {
            if (s.charAt(i) != "S"){
                count += 1;
            }
        }
    
        if (index === 3) {
            index = 1;
        } else {
            index += 1;
        }  
    }
    // console.log(count);
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = marsExploration(s);

    ws.write(result + "\n");

    ws.end();
}
