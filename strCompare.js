let str1 = 'abc';
let str2 = 'def';
let output = compare(str1,str2);
console.log(output);

function compare(str1,str2){
    let value = (str1.length == str2.length) ? true : false;
    return value;
}
