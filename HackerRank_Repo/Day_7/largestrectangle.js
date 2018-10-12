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

// Complete the largestRectangle function below.
function largestRectangle(h,n) {
    var maxarea=0;
    var x=new Array();
    for(let i=0;i<n;i++)
      x.push(h[i]);
    x.sort((a,b)=>a-b);
    
    for(var i=0;i<n;i++)
    {
        
        var k=0;
        var min=x[k];
        while(min<=h[i]){
            var count=0;
            if(h[i]>=min){
                for( var j=i;j<n;j++) {
                    if(h[j]>=min) {
                        count++;
                    }
                    else{
                        break;
                    }
                }
            }
            else{
                break;
            }
            var area=min*count;
            if(maxarea<area) {
                maxarea=area;
            }
            k++;
            min=x[k];
        }
    }
return maxarea;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    let result = largestRectangle(h,n);

    ws.write(result + "\n");

    ws.end();
}