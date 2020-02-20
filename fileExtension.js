//program to get file extension

function fileExtension(str){
    let extension = str.substring(str.lastIndexOf('.'));
    console.log(extension);
}

fileExtension("name.html");
fileExtension("webpack.config.js");

// let fileExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(fileExtension("name.js"));
