let input = document.getElementById('tb1');
let output = document.getElementById('tb2');


function updateTask(){
    if(input.value != '' && output.value == ''){
        output.value = input.value;
        input.value = '';
        return true;
    }
    else if(input.value == ''){
        alert('Invalid Operation');
        return false;
    }
}

function clearTask(){
    output.value != ''? output.value = '' :
    alert('operation cannot be performed');
}
