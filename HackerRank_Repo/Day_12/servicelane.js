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

// Complete the serviceLane function below.
function serviceLane(n, cases, width) {
    // Complete this function
    var m = cases.length;
    var ans = [];
    for(var x=0;x<m;x++){
        var c1 = cases[x][0];
        var c2 = cases[x][1];
        var len = c2 - c1 + 1;
        var truck = 0, flag = 0;
        for(var i=c1;i<=c2;i++){
            var w = width[i];
            if(w == 1){
                flag = 1;
                break;
            }
            if(w == 3){
                truck++;
            }
        }
        if(flag == 0){
            if(truck == len){
                ans.push(3);
            }
            else {
                ans.push(2)
            }
        } else {
            ans.push(1)
        }
        
    }
    
    return ans
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nt = readLine().split(' ');

    const n = parseInt(nt[0], 10);

    const t = parseInt(nt[1], 10);

    const width = readLine().split(' ').map(widthTemp => parseInt(widthTemp, 10));

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = readLine().split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    let result = serviceLane(n, cases, width);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
