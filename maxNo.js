
let array  = [1,2,4,18,5,10,12,30];
output = maxNo(array);
console.log(output);

function maxNo(array){
    let max = 0;
    for(let i = 0;i <= array.length;i++){
        if(array[i] > max)
        max = array[i];
    }
    return max;
}
