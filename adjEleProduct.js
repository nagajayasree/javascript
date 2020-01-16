//prgm to print product of element's adjacent element

let array = ['2','4','3','6'];
let result = maxProduct(array);
//console.log(result);

function maxProduct(array){
    for(let i = 0;i < array.length-1;i++){
        let num = array[i] * array[i+1];
        console.log(num);
    }
}
