'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the roadsAndLibraries function below.
function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib < c_road) {
        return n * c_lib
    }
    var nodes = [];
    for (var i = 1; i <= n; i++) {
        nodes[i] = [];
    }
    for(var a1 = 0; a1 < cities.length; a1++){
        let currentCity = cities[a1]
        var city_1 = currentCity[0];
        var city_2 = currentCity[1];

        nodes[city_1].push(city_2);
        nodes[city_2].push(city_1);
    }
    var cost = 0;
    var passedOver = [];
    for (var i = 1; i <= n; i++) {
        if (passedOver[i]) {
            continue;
        }
        passedOver[i] = true;
        cost += c_lib;

        var queue = [];
        queue.push(i);

        while (queue.length > 0) {
            var nodeIdx = queue.shift();
            var connections = nodes[nodeIdx];
            for (var w = 0; w < connections.length; w++) {
                if (passedOver[connections[w]]) {
                    continue;
                }
                passedOver[connections[w]] = true;
                queue.push(connections[w]);
                cost += c_road;
            }
        }
    }
    
    return cost
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nmC_libC_road = readLine().split(' ');

        const n = parseInt(nmC_libC_road[0], 10);

        const m = parseInt(nmC_libC_road[1], 10);

        const c_lib = parseInt(nmC_libC_road[2], 10);

        const c_road = parseInt(nmC_libC_road[3], 10);

        let cities = Array(m);

        for (let i = 0; i < m; i++) {
            cities[i] = readLine().split(' ').map(citiesTemp => parseInt(citiesTemp, 10));
        }

        const result = roadsAndLibraries(n, c_lib, c_road, cities);

        ws.write(result + '\n');
    }

    ws.end();
}
