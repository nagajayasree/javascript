//if string is starting with capital letter and ending with '.'
//then correct string else incorrect string

const input = 'I am coding.';
if(input.charAt(0) === input.charAt(0).toUpperCase() && input.charAt(input.length-1) === '.'){
    console.log('correct string');
}
else{
    console.log('incorrect string');
}
