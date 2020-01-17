//code to check given 2 integers,whether anyone of them is 50 or sum of them is 50,return true,otherwise false.

let numberCheck = function(a,b){
    // if([a+b] == 50){
    //     return true;
    // }
    // if(a == 50||b == 50){
    //     return true;
    // }
    // return false;
    let result = ([a+b] == 50||a == 50||b == 50) ? true : false;
    return result;
}

let output = numberCheck(40,50);
console.log(output);
