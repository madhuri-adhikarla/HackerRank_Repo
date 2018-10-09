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

// Complete the cavityMap function below.
function cavityMap(a) {
   var res = [];
    for(let i=0; i < a.length; i++){
        res.push(a[i].split(""));
    }
    // console.log(res)
    for(let x=1; x < (a.length - 1); x++){
        for(let y=1; y < (res[x].length - 1); y++){
            
            if( res[x][y] > res[x][y-1] && res[x][y] > res[x][y+1] && res[x][y] > res[x-1][y] && res[x][y] > res[x+1][y]){
                res[x][y] = "X";
            }
        }
        a[x] = res[x].join("");
    }
    
    return a;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
