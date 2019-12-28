const numbers = [1,2,3,4,5,3];
const output = occurance(numbers);
console.log(output);

function occurance(numbers){
    let number = [];
    for(let i = 0;i < numbers.length;i++){
        if(numbers.indexOf(i) === numbers.lastIndexOf(i))
        number = numbers[i];
    }
    return number;
}
