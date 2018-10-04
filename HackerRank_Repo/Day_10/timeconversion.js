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
    var time = readLine();
    var input = time.split(':');
    var hours = Number(input[0]);
    var minutes = input[1];
    var seconds = input[2].substr(0,2);
    var AMPM = input[2].substr(2);

    if (hours === 12) {
        hours = 0;
    }
    if (AMPM.toLowerCase() === 'pm') {
        hours += 12;
    }
    if (hours < 10) {
        hours = '0' + hours;
    }
    console.log([hours,minutes,seconds].join(':'));
}