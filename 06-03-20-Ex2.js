<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Hello</p>
    <button onclick="printContent()">Print</button>
    <script src="printContents.js"></script>
</body>
</html>


//printContents.js
//program to print the contents of the current window.
function printContent(){
    window.print();
}
