var addDigit=false;
var oldVal=0;
var op="=";

function btncon(concatValue)//concatination operands
{
    if(addDigit)
    {
        document.getElementById("txtdisp").value+=concatValue;
    }
    else
    {
        document.getElementById("txtdisp").value=concatValue;
        addDigit=true;
    }
}

function operation(newOperation)//calculate the value
{
    var newVal=eval(document.getElementById("txtdisp").value)
    

    switch(op)
    {
        case "+":
            oldVal=oldVal+newVal;
            break;
        case "-":
            oldVal=oldVal-newVal;
            break;
        case "*":
            oldVal=oldVal*newVal;
            break;
        case "/":
            oldVal=oldVal/newVal;
            break;
        case "=":
            oldVal=newVal;
            break;
        default:
            oldVal=newVal;
    }
    document.getElementById("txtdisp").value=oldVal;
    addDigit=false;
    op=newOperation;
}

function bclear()//clear function to clear textbox
{
    document.getElementById("txtdisp").value=0;
    oldVal=0;
    addDigit=false;
    op="=";
}