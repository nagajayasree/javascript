
const numbers1 = [1,2,2,4];
const numbers2 = [];
let i = 0;
let j = 0;
while(i <= numbers1.length-1){
    if(numbers1.indexOf(i) != numbers1.lastIndexOf(i)){
        console.log(numbers1);
        console.log("duplicate number exists");
        numbers2.push(numbers1[i]);
        console.log('duplicate number is at location:'+ numbers1[i]);
        numbers1.splice(numbers1[i],1);
        console.log('unique number set : ' + numbers1);
    }
    i++;
}                   
