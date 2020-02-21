//program to create new string from given string taking 
//1st 3chars,last 3chars add them together.
//String length must be 3 or more,
//if not return original string. 

function combinedString(str){
    let first3 = str.slice(0,3);
    let last3 = str.substring(str.length,str.length-3);
    let result = (str.length <= 3) ? str : `${first3}${last3}`;
    console.log(result);
}

combinedString("Hi");
combinedString("Good Morning");
