let input = 'aba';
console.log(input);
let result = palindrome(input);
console.log(result);

function palindrome(input){
    let str1 = Array.from(input);
    console.log(str1);
    let str2 = str1.reverse();
    console.log(str2);
    let str = str2.join('');
    console.log(str);
    return (input == str) ? true : false;
}
