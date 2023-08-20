const dresss = [11, 23, 54, 23, 64]

function dresssNumber(dresss) {
    const output = [];
    for( number of dresss){
        const square = number * 2;
        output.push(square);
    }
   return output;

}

const result = dresssNumber (dresss) ;
console.log(result);