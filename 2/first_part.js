// Opponent
// A = Rock
// B = Paper
// C = Scissors

// Me
// X = Rock
// Y = Paper
// Z = Scissors

const readline = require('node:readline');
const fs = require("fs");

const readInterface = readline.createInterface({input: fs.createReadStream('./input.txt')});
const winning = {
    "X":"C",
    "Y":"A",
    "Z":"B"
};
const loosing = {
    "X":"B",
    "Y":"C",
    "Z":"A"
};
const WCharCode = "W".charCodeAt(0);
let totalScore=0;

const getRoundScore = (opp,me) =>{
    let shapeScore = me.charCodeAt(0)-WCharCode;

    if(winning[me]===opp) return shapeScore+6;
    if(loosing[me]===opp) return shapeScore;
    return shapeScore+3;
};

readInterface.on('line', (line) => {
    (line!=="")&&(totalScore+=getRoundScore(line.charAt(0),line.charAt(2)));
});

readInterface.on('close',()=> {
    console.log(totalScore);    
});