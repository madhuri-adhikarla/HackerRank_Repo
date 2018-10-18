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

// Complete the winningLotteryTicket function below.
function winningLotteryTicket(tickets) {
let ticketSet = new Set();    
    let count = [];
 
    for (let i = 0; i < tickets.length; i++) {
        for (let x = i+1; x < tickets.length; x++) {
            if (tickets[i].length + tickets[x].length > 9){
                let tempSet = [...new Set([...tickets[i] ,...tickets[x]])];
                
                if (tempSet.length == 10){
                    count++;
                } 
            }
            
        }
    }
    
    
    return count;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let tickets = [];

    for (let i = 0; i < n; i++) {
        const ticketsItem = readLine();
        tickets.push(ticketsItem);
    }

    let result = winningLotteryTicket(tickets);

    ws.write(result + "\n");

    ws.end();
}
