//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”

//method1
let name = prompt('what is the official name of javascript?','');
let message = (name == "ECMAScript") ? "Right" : "You don't Know? ECMAScript!";
alert(message);

//method2
let result = prompt("what is the official name of javascript?","");
(result == "ECMAScript") ? alert("Right") : alert("You don't Know? ECMAScript!")
