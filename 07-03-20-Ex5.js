//write a function that returns true
//if the provided predicate function returns true
//false otherwise.

function typeCheck(){
    let name = "jaya";
    if(typeof(name) == "string"){
        return true;
    }
    else{
        return false;
    }
}

function funcCheck(){
    if(typeCheck() == true){
        return true;
    }
    return false;
}

console.log(funcCheck());
