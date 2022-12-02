// Opponent
// A = Rock
// B = Paper
// C = Scissors

// outcome
// X = Loose
// Y = Draw
// Z = Win

const readline = require('node:readline');
const fs = require("fs");

const readInterface = readline.createInterface({input: fs.createReadStream('./input.txt')});

const score = {
    "A":{
        "X":3,
        "Y":4,
        "Z":8
    },
    "B":{
        "X":1,
        "Y":5,
        "Z":9,
    },
    "C":{
        "X":2,
        "Y":6,
        "Z":7
    }
}
let totalScore=0;

readInterface.on('line', (line) => {
    (line!=="")&&(totalScore+=score[line.charAt(0)][line.charAt(2)]);
})

readInterface.on('close',()=> {
    console.log(totalScore);    
})