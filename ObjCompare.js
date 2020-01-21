//write a program to compare objects and their properties

function createObj(name,age,place){
    let obj = {name,age,place};
    return obj;
}

let obj1 = createObj('a','b','c');
let obj2 = createObj('a','b','c');
let obj3 = obj2;
console.log(obj1 == obj2);
console.log(obj3 == obj2);
console.log(obj1.name == obj2.name);
obj1.age = 'd';
console.log(obj1.age == obj2.age);
