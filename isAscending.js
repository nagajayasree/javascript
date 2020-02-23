//program to check whether a given arr is in ascending order.

function sortedArray(arr){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] < arr[i+1]){
            return true;
        }
        return false;
    }
}

console.log(sortedArray([1,3,4,5,6,8,10]));
console.log(sortedArray([1,34,56,7,10]));
