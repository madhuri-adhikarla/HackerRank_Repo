function processData(input) {
    var arrInputs = input.split("\n");
    var nbrOfOperations = parseInt(arrInputs[0]);
    var queue = [];
    var operation = [];
    
    for(var i = 1; i <= nbrOfOperations; i++) {
        operation = arrInputs[i].split(" ");
        switch(parseInt(operation[0])) {
            case 1: 
                queue.push(parseInt(operation[1]))
                break;
            case 2:
                queue.shift()
                break;
            case 3:
                console.log(queue[0])
                break;
            default:
                continue;
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});