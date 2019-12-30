//write a function which takes hours and minutes as parameters
//and convert them to seconds.

let output = convert(1,3);
console.log(output);

function convert(hrs,mins){
    let a = hrs * 60 * 60;
    let b = mins * 60;
    let c = a + b;
    return c;
}
