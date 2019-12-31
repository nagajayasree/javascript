
//write a function to check spaces in input 

let string = 'hello world';
let string2 = 'hello';
spaceCheck(string); 

function spaceCheck(string){
    //method1
    if(string.includes(' ')){
        console.log('space exists');
    }
    else 
    console.log('no spaces');
    
    //method2
    let space = (string2.includes(' ')) ? true : false;
    console.log(space);
}
