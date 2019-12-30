const numbers1 = [1,3,2,4,3,5];
const numbers2 = [];
let i = 0;
let j = 0;
while(i <= numbers1.length-1){
    if(numbers1.indexOf(i) != numbers1.lastIndexOf(i)){
        console.log(numbers1);
        console.log('number occured more than once');
        numbers2.push(numbers1[i]);
        console.log('number occured at location: '+ numbers1[i]);
        }
    i++;
}                   
