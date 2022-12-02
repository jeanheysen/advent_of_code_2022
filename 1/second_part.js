const readline = require('node:readline');
const fs = require("fs")

const readInterface = readline.createInterface({input: fs.createReadStream('./input.txt')});
let first=0,second=0,third=0,actual=0;

function updatePodium (){
    if(actual>first){
        third = second;
        second = first;
        first = actual
        return;
    }
    if(actual > second ){
        third = second;
        second = actual;
        return;
    }

    if(actual > third){
        third = actual;
        return;
    }
}

readInterface.on('line', function(line) {
    if(line==="") {
        
        updatePodium();
        actual = 0;
        return;
    }
    actual+= +line;
})
readInterface.on('close',()=> {
    console.log(
        "first:",first,
        "second:",second,
        "third:",third,
        "sum:",first+second+third);
})