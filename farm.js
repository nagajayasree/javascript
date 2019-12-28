//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
//The farmer breeds three species:

//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. 
//You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens,cows,pigs){
    let x = 2, y = 4, z = 4;
    let a = x * chickens, b = y * cows , c = z * pigs;
    let sum = a+b+c;
    console.log('total no. of legs :'+ sum);
}

animals(2,3,4);
