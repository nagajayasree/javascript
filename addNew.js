//program to create a new string adding "New!" in front of a given string.
//If given string begins with "New!" already then return original string.

function addNew(string){
    if(string.slice(0,4) == "New!")
    {
        return "Original String";
    }
    else{
        let newString = `New! ${string}`;
        return newString;
    }
}

let result = addNew("New! Mobile");
console.log(result);

let output = addNew("Car");
console.log(output);
