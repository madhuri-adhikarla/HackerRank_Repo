'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);
    let list = Array(n);
        for(let i=0;i<n;i++){
            list[i]=[];
        }
    for (let i = 0; i < q; i++) {
            
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    var lastAnswer=0;
          for(var j=0;j<q;j++){
            var ch=queries[j][0];
            var x=queries[j][1];
            var y=queries[j][2];
    
          
              var sequence=(x^lastAnswer)%n;
             if(ch==1){
                 var a=list[sequence];
                               
                   a.push(y);
             }   
            else{
                var size=list[sequence].length;
                var index=y%size; 
                lastAnswer=list[sequence][index];
                console.log(lastAnswer);
            }
        
        }
}