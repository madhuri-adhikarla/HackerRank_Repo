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

// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {
    
        var chessBoard = [];
        for(var i=0;i<n;i++)
        {
            chessBoard[i]=[];
            for(var j=0;j<n;j++)
                {
                    chessBoard[i][j]=0;
                }
        }
        var rQueen = r_q-1;
        var cQueen = c_q-1;
        var sum = 0;
        chessBoard[rQueen][cQueen] = 1;
        for(var a0 = 0; a0 < k; a0++){
            var rObstacle = obstacles[a0][0]-1;
            var cObstacle = obstacles[a0][1]-1;
            // your code goes here
            chessBoard[rObstacle][cObstacle]=-1;
        }
        //check all 8 ways
        // and down
        for(var i =rQueen+1;i<n;i++){
            if(chessBoard[i][cQueen] ==0){
                sum+=1;
            }else{
                break;
            }
        }
         for(var i =rQueen-1;i>=0;i--){
              if(chessBoard[i][cQueen] ==0){
                sum+=1;
            }else{
                break;
            }
        }
        //left and right
         for(var i =cQueen+1;i<n;i++){
              if(chessBoard[rQueen][i] ==0){
                sum+=1;
            }else{
                break;
            }
        }
         for(var i =cQueen-1;i>=0;i--){
              if(chessBoard[rQueen][i] ==0){
                sum+=1;
            }else{
                break;
            }
        }
        //diagonal right
        for(var row =rQueen-1,col=cQueen+1;row>=0 && col<n;row--,col++){
              if(chessBoard[row][col] ==0){
                sum+=1;
            }else{
                break;
            }
        }
         for(var row =rQueen+1,col=cQueen-1;row<n && col>=0;row++,col--){
              if(chessBoard[row][col] ==0){
                sum+=1;
            }else{
                break;
            }
        }
        
         //diagonal left
        for(var row =rQueen-1,col=cQueen-1;row>=0 && col>=0;row--,col--){
              if(chessBoard[row][col] ==0){
                sum+=1;
            }else{
                break;
            }
        }
         for(var row =rQueen+1,col=cQueen+1;row<n && col<n;row++,col++){
              if(chessBoard[row][col] ==0){
                sum+=1;
            }else{
                break;
            }
        }
        
       return sum;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const r_qC_q = readLine().split(' ');

    const r_q = parseInt(r_qC_q[0], 10);

    const c_q = parseInt(r_qC_q[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    let result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + "\n");

    ws.end();
}