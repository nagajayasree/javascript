//divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by both 3 and 5 => fizzbuzz
//not divisible by 5 or 3 => input
//not a number => 'not a number'

function fizzbuzz(number){
    if(number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
    if(number % 3 === 0) return 'fizz';
    if(number % 5 === 0) return 'buzz';
    if(typeof number !== 'number') return NaN;
    return number;
}

const output = fizzbuzz(23);
console.log(output);
