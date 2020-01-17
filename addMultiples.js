//Program to find multiples of 3,5 and printing their sum

let num = 10;
let a = 0;

let addMultiples = function(num){
    for(let i = 1;i < num;i++){
        if(i % 3 == 0 || i % 5 == 0){
            a = a + i;
            console.log(a);
        }
    }
}

addMultiples(num);
