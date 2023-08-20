 
 const nums = [6, 4, 1, 9, 12, 32]

 function makeSquare (nums){
    const output =[];
    for ( const num of nums){
        const doubled = num * 2 ;
        output.push(doubled);
    }
    return output;
 }

const result = makeSquare (nums);
 console.log(result);