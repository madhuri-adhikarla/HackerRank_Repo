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


function gradingStudents(grades) {
    var newGrade=0;
    var result = [];
    for(let i=0;i<grades.length;i++) {
        if(grades[i] >= 38 && grades[i] % 5 >= 3){
            // console.log(grades[i] + 5 - (grades[i] % 5));
            // return result ;
            result[i] = grades[i] + 5 - (grades[i] % 5);
        }else{
            // console.log(grades[i]);
             // return result;
             result[i] = grades[i];

        }
    }
    
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

   var result =  gradingStudents(grades);
    ws.write(result.join("\n") + "\n");
    // result.forEach(e => console.log(e))

   ws.end();
}


