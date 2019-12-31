//write a function that takes word determines whether
//plural or not.plural words ends with 's'.

let string1 = 'years';
let string2 = 'book';
isPlural(string2);

function isPlural(string2){
    let result = (string2[string2.length-1] == 's') ? true : false;
    console.log(result);
}
