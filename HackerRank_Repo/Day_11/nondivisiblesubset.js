function processData(input) {
    var inp = input.split("\n");
    var n = parseInt(inp[0].split(" ")[0]);
    var k = parseInt(inp[0].split(" ")[1]);
    var a = inp[1].split(" ");
    a = a.map(Number);
    var arr = [];
    for(var i=0;i<k;i++){
        arr[i] = 0;
    }
    
    for(i=0;i<n;i++){
        arr[a[i]%k]++;
    }
    var size = 0
    for(var i=1;i<Math.ceil(k/2);i++){
        if(arr[i] > arr[k-i]){
            size += arr[i];
        }else{
            size += arr[k - i];
        }
    }
    if(arr[0] != 0){
        size++;
    }
    if( k%2 ==0 && arr[k/2] != 0){
        size++;
    }
    console.log(size);
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