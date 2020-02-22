//program to find number of even digits in given array

let arr = [4,129,10,8,75,49,18];
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
