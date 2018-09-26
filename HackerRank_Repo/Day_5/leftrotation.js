'use strict';

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

function main() {
    const nd = readLine().split(' ');

    const size = parseInt(nd[0], 10);

    const noOfQueries = parseInt(nd[1], 10);

    const arr = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
        
    var temp=[size];
     for(let i = 0; i < size; i++) {
            if(noOfQueries > i) {
                
                temp[(size - noOfQueries + i)]=arr[i]; 
               // console.log(i+ " " + arr[i]);
        
            }
            else{
                //arr.splice((i - noOfQueries) , 0 , arr[i]);
                temp[i - noOfQueries]=arr[i];
            }
        }
        var res="";
        for(let i = 0; i < size; i++){
            res = res + temp[i].toString() + " ";
            
        }
    console.log(res);
}
