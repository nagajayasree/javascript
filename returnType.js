//Write a JavaScript function which accepts an argument and returns the type.

let a = function(argument){
    console.log(typeof(argument));
}

a('hello'); //string
a(1); //number
let obj = {name : 'abc'};
a(obj); //object
let f = function(){};
a(f); //function
a(true); //boolean
a(); //undefined
