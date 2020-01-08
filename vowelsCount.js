//program to print no.of vowels in given string

let word = 'javascript';
let output = vowelsCount(word);
console.log(output);

function vowelsCount(word){
    let count = 0;
    for(let i = 0;i <= word.length;i++){
        if(word[i]=='a'||word[i]=='e'||word[i]=='i'||word[i]=='o'||word[i]=='u')
        count++;
    }
    return count;
}
