const numbers1 = [1,1,3,2,4,5];
const numbers2 = [];
let i = 0;
let j = 0;
while(i <= numbers1.length){
    if(numbers1.indexOf(i) != numbers1.lastIndexOf(i)){
        console.log("duplicate number exists");
        numbers2.push(numbers1[i]);
        console.log('duplicate number is at location:'+ numbers2[j]);
        numbers1.splice(numbers1[i],1);
        console.log(numbers1);
    }
    i++;
}                   
