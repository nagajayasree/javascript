//Write a JavaScript function that reverse a number

let n = 123456;
let arr = [];
let arrNum = n.toString().split('');
//console.log(arrNum);
// let a = arrNum.join('');
// console.log(a);

function numRev(arrNum){
    for(let i = arrNum.length-1;i >= 0;i--){
        arr.push(arrNum[i]);
    }
    //console.log(arr);
    let num = arr.join('');
    console.log(num);
}

numRev(arrNum);

