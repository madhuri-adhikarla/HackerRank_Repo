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


function isValid(s){
    // Complete this function
    var sArr = s.split('').sort(),
        charArr = [],
        countArr = []
    
    var redStr = sArr.forEach(function(el,i,arr){
        if(charArr.indexOf(el) < 0){
            charArr.push(el);
            countArr.push(arr.lastIndexOf(el) + 1 - arr.indexOf(el))
        };        
    })
    
    countArr.sort(function(a,b){return a - b});
    
    var first = countArr[0],
        second = countArr[1],
        last = countArr[countArr.length-1],
        secondToLast = countArr[countArr.length-2]
    
    if(
            (first === last)
        ||  ((first === 1) && (second === last))
        ||  ((first === secondToLast) && ((last - first) === 1))
    ){
        return 'YES';
    }
    return 'NO';
}

function main() {
    var s = readLine();
    var result = isValid(s);
    process.stdout.write(""+result+"\n");

}