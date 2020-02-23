//program to find number of even digits in given array

let arr = [1,2,3,4,5,6];
function findEvenDigits(){
    count = 0,newArr = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] % 2 == 0){
            count++;
        }
    }
    console.log(count);
}

findEvenDigits(arr);
