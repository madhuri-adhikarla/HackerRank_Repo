process.stdin.resume();
process.stdin.setEncoding("ascii");
let currentLine = 0;
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split('\n');
    processData(_input);
});
function readLine() {
    return _input[currentLine++];
}

function processData(input) {
    const testcases=parseInt(readLine(), 10);
    var stack =[];
   for(let i=0;i<testcases;i++){
       const nq = readLine().replace(/\s+$/g, '').split(' ');
       const op = parseInt(nq[0], 10);
       var val = parseInt(nq[1], 10);
       if(op==1) {
            stack.push(val);
       } else if(op==2){
           stack.pop();
       } else {
           console.log(Math.max(...stack));
       }
   }
} 

