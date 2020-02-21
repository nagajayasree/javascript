//program to create new string from given string taking 
//1st 3chars,last 3chars add them together.
//String length must be 3 or more,
//if not return original string. 

function combinedString(str){
    let str1 = str.slice(0,3);
    //console.log(str1);
    let str2 = str.substring(str.length,str.length-3);
    //console.log(str2);
    let result = (str.length <= 3) ? str : `${str1}${str2}`;
    console.log(result);
}

combinedString("Hi");
combinedString("Good Morning");
