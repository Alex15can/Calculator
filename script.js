currentValue = "";
lastValue = "";
currentOperation = "";
futureOperation = "";

function calculation(value) {
    if (currentOperation != "=") {
        currentValue += value
    };
    display(currentValue)
};

function display(value) {
    if (value == "") {
        currentValue = "";
        lastValue = "";
        currentOperation = "";
        futureOperation = "";
    };
    document.getElementById("display").textContent=value;
};
function operation(futureoperation) {
    if (lastValue != '' && futureoperation == "=" && currentOperation == "+") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) + Number(currentValue);
        currentOperation = futureoperation;
        display(currentValue);
    }else if(lastValue != '' && futureoperation != "=" && currentOperation == "+") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) + Number(currentValue);
        currentOperation = futureoperation;
        lastValue = currentValue;
        currentValue = ""
        display(lastValue);
    }else if(lastValue != '' && futureoperation == "=" && currentOperation == "-") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) - Number(currentValue);
        currentOperation = futureoperation;
        display(currentValue);
    }else if(lastValue != '' && futureoperation != "=" && currentOperation == "-") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) - Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = futureoperation;
        display(lastValue);
    }else if(lastValue != '' && futureoperation == "=" && currentOperation == "*") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) * Number(currentValue);
        currentOperation = futureoperation;
        display(currentValue);
    }else if(lastValue != '' && futureoperation != "=" && currentOperation == "*") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) * Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = futureoperation;
        display(lastValue);
    }else if(lastValue != '' && futureoperation == "=" && currentOperation == "/") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) / Number(currentValue);
        currentOperation = futureoperation;
        display(currentValue);
    }else if(lastValue != '' && futureoperation != "=" && currentOperation == "/") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) / Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = futureoperation;
        display(lastValue);
    }else {
        lastValue = currentValue;
        currentValue = "";
        currentOperation = futureoperation;
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
multiplication.addEventListener("click", function (){
    operation("*");
});
division.addEventListener("click", function (){
    operation("/");
});
equal.addEventListener("click", function (){
    operation("=");
});