let inputfield=document.getElementById('result');

function appendToInput(value){
   
        inputfield.value+=value;
}

function clearInput()
{
    inputfield.value ='';
}
function calculate()
{
    try{
        inputfield.value=eval(inputfield.value);
    }
    catch{
        inputfield.value="Invalid";
    }

}