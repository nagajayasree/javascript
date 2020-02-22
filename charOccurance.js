//program to check a given string contains 2 to 4 occurances of specified character.

function noOfOccurance(char){
    let str = "book",count = 0;
    if(str.includes(char) == true){
        count++;
    }
    if(str.indexOf(char) != str.lastIndexOf(char)){
        count++;
    }
    else if(str.includes(char) == false || str.includes(char) == " "){
        console.log("char not found");   
    }
    console.log(count);
};

noOfOccurance("t");

