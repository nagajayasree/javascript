//program to add elements in an array,print their index,and check whether sum is less than or greater than target. 

let array = [2,4,6,8],target = 10;
let output = sum(array,target);
console.log(output);

function sum(array,target){
    for(let i = 0; i <= array.length-1;i++){
        let add = array[i] + array[i+1];
        console.log(add);
        let index = [i] +','+ [i+1];
        console.log("at indexes" +' '+ index);
        let result = (add >= target) ? 'greater than target' : 'less than target';
        return result;
    }
}
