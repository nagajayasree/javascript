function charFound(char){
    let str = "js";
    if(str.includes(char) == true){
        console.log("char found");
    }
    else if(str.includes(char) == false){
        console.log("char not found");   
    }
};

charFound("j");
