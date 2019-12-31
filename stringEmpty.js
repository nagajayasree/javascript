//create function that returns true 
//if string is empty,otherwise false

let a = '';
let output = isEmpty(a);
console.log(output);

function isEmpty(a){
    if(a.length == 0) return true;
    return false;
}
