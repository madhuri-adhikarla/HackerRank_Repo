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

// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    var count = [];
    for(let i=0;i<queries.length;i++){
        count[i] = 0;
        for(let j = 0; j<strings.length ; j++){
            var s1 = strings[j];
            var s2 = queries[i];
            if(s1==s2){
                count[i]++;
            }
        }
    }
    
    return count;
    
    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    let res = matchingStrings(strings, queries);

    ws.write(res.join("\n") + "\n");

    ws.end();
}
