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
    var n = parseInt(readLine());
    types = readLine().split(' ');
    types = types.map(Number);
    
    mostCommon = 1;
    most = 0;
    for (type = 1; type <= 5; type++) {
        total = 0;
        for (i=0; i<n; i++) {
            if (types[i] == type) {
                total++;
            }
        }
        if (most < total) {
            most = total;
            mostCommon = type;
        }
    }
    console.log(mostCommon);
}