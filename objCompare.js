//write a function to compare objects

function createObj(name,age,place){
    let obj = {name,age,place};
    return obj;
}

let obj1 = createObj('a','b','c');
let obj2 = createObj('a','b','c');
console.log(obj1===obj2));
