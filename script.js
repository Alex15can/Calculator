currentValue = "";
lastValue = "";
currentOperation = "";

function calculation(value) {
    if (currentOperation != "=") {
        currentValue += value
    };
    display(currentValue)
};

function display(value) {
    if (value == "") {
        currentValue = ""
        lastValue = ""
        currentOperation = ""
    };
    document.getElementById("display").textContent=value;
};
function operation(sign) {
    if (lastValue != '' && sign == "=" && currentOperation == "+") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) + Number(currentValue);
        currentOperation = sign;
        display(currentValue);
    }else if(lastValue != '' && sign != "=" && currentOperation == "+") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) + Number(currentValue);
        currentOperation = sign;
        lastValue = currentValue;
        currentValue = ""
        display(lastValue);
    }else if(lastValue != '' && sign == "=" && currentOperation == "-") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) - Number(currentValue);
        currentOperation = sign;
        display(currentValue);
    }else if(lastValue != '' && sign != "=" && currentOperation == "-") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) - Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = sign;
        display(lastValue);
    }else {
        lastValue = currentValue;
        currentValue = "";
        currentOperation = sign;
    };
};

clear.addEventListener("click", function (){
    display("");
});
one.addEventListener("click", function (){
    calculation('1');
});
two.addEventListener("click", function (){
    calculation('2');
});
three.addEventListener("click", function (){
    calculation('3');
});
four.addEventListener("click", function (){
    calculation('4');
});
five.addEventListener("click", function (){
    calculation('5');
});
six.addEventListener("click", function (){
    calculation('6');
});
seven.addEventListener("click", function (){
    calculation('7');
});
eight.addEventListener("click", function (){
    calculation('8');
});
nine.addEventListener("click", function (){
    calculation('9');
});
zero.addEventListener("click", function (){
    calculation('0');
});
addition.addEventListener("click", function (){
    operation("+");
});
subtraction.addEventListener("click", function (){
    operation("-");
});
equal.addEventListener("click", function (){
    operation("=");
});