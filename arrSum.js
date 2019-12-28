const numbers = [1,2,3,4];
const output = arrSum(numbers);
console.log(output);

function arrSum(numbers){
    let array = 0;
    for(let elements of numbers){
        array += elements;
    }
    return array;
}
