'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(true){
        case 'aeiou'.includes(s[0]):
            return 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            return 'B';
            break;
        case 'hjklmn'.includes(s[0]):
            return 'C';
            break;
        default:
            return 'D'
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}