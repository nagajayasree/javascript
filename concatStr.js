//program to concatenate two strings except their first character

function concatString(str1,str2){
    let res1 = str1.substring(1);
    let res2 = str2.substring(1);
    console.log(`${res1}${res2}`);
}

concatString('good','night');
concatString('fruits','veggies');
