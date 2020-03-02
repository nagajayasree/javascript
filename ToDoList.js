function getTextbox(value){
    return '<input name = "getTextbox" type="text" value = "' + value + '"/>'+
    '<input type="button" value="Remove" onclick="RemoveTextBox(this)"/>'
}

function AddTextBox(){
    let input = document.getElementById('tb1').value;
    let div=document.createElement('div');
    div.innerHTML = getTextbox(input);
    document.getElementById("TextBoxContainer").appendChild(div);
}

function RemoveTextBox(div){
    document.getElementById("TextBoxContainer").removeChild(div.parentNode);
}
