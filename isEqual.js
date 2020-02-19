//write a function to check any one of the numbers is 100 or sum of numbers is equal to 100.

let result = numCheck(75,25);
console.log(result);

function numCheck(a,b){
    if(a == 100||b == 100||a+b == 100){
        return true;
    }
    else{
        return false;
    }
};
