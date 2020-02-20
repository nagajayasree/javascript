//program to replace every character in a given string with character 
//following it in the alphabet 

function replaceChar(input){
    let output = "";
    for(i = 0 ; i < input.length;i++){
        let nextChar = (input.charCodeAt(i))+1;
        n = String.fromCharCode(nextChar);
        output += n;
    }
    console.log(output);
}

replaceChar("Hello")
replaceChar("GoodMorning");
