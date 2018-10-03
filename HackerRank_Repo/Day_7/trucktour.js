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

function processData() {
    var N = parseInt(readLine());
    var startIndex=0;
    var sum=0;
    for(var i = 0; i < N; i++){
        var data = readLine().split(' ');
        var petrol = parseInt(data[0]);
        var distance = parseInt(data[1]);
        sum += petrol - distance;

            if (sum < 0) {
                sum = 0;
                startIndex = i + 1;
            }
        
   }
    
        console.log(startIndex);
}