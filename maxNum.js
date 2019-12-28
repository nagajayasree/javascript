let array = [12,25,7,45,16];
let output = maxNum(array);
//console.log(output);

function maxNum(array){
    let max = Math.max.apply(null,array);
    console.log(max);
}
