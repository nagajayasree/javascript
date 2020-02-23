//program to get largest even number from an array of integers.

let arr = [1,2,3,4,5,6,10];
function getEven(){
    let anotherArr,evenArr = [];
    for(let i = 0;i < arr.length;i++){
        if(arr[i] % 2 == 0){
            anotherArr = arr[i];
            //console.log(anotherArr);
            evenArr.push(anotherArr);
        }
    }
    //console.log(evenArr);
    let largestNo = Math.max(...evenArr);
    console.log(largestNo);
}

getEven(arr);
