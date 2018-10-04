process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}


function main() {
    var N = parseInt(readLine());
    var a = [], median, num, center;
    for(var i = 0; i < N; i++){
       a[i] = parseInt(readLine());
       a.sort(function(n,m){
          if (n < m) {
              return 1
          } else if (n > m){
              return -1
          } else {
              return 0
          }
       })
        num = a.length;
       if (num % 2 === 0) {
           center = num /2
           median = (a[center - 1] + a[center]) / 2;
           console.log(median)
       } else {
           center = Math.round(num /2)
           median = a[center -1]
           console.log(median)
       }
    }
}