currentValue = "";
lastValue = "";
currentOperation = "";
futureOperation = "";

function calculation(value) {
    if (value == '') {
        currentValue = "";
        lastValue = "";
        currentOperation = "";
        futureOperation = "";
    };
    if (currentOperation != "=") {
        if (currentValue.includes(".") == false && value != ".") {
            currentValue += value
        };
    };
    display(currentValue)
};

function display(value) {
    if (value == "") {
        value = 0
    };
    value = Math.round(value * 1000000) / 1000000;
    document.getElementById("display").textContent=value;
};
function operation(futureOperation) {
    if (lastValue != '' && futureOperation == "=" && currentOperation == "+") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) + Number(currentValue);
        currentOperation = futureOperation;
        display(currentValue);
    }else if(lastValue != '' && futureOperation != "=" && currentOperation == "+") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) + Number(currentValue);
        currentOperation = futureOperation;
        lastValue = currentValue;
        currentValue = ""
        display(lastValue);
    }else if(lastValue != '' && futureOperation == "=" && currentOperation == "-") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) - Number(currentValue);
        currentOperation = futureOperation;
        display(currentValue);
    }else if(lastValue != '' && futureOperation != "=" && currentOperation == "-") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) - Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = futureOperation;
        display(lastValue);
    }else if(lastValue != '' && futureOperation == "=" && currentOperation == "*") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) * Number(currentValue);
        currentOperation = futureOperation;
        display(currentValue);
    }else if(lastValue != '' && futureOperation != "=" && currentOperation == "*") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) * Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = futureOperation;
        display(lastValue);
    }else if(lastValue != '' && futureOperation == "=" && currentOperation == "/") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) / Number(currentValue);
        currentOperation = futureOperation;
        display(currentValue);
    }else if(lastValue != '' && futureOperation != "=" && currentOperation == "/") {
        console.log(lastValue, currentValue, currentOperation)
        currentValue = Number(lastValue) / Number(currentValue);
        lastValue = currentValue;
        currentValue = ""
        currentOperation = futureOperation;
        display(lastValue);
    }else if (lastValue != '' && futureOperation == "=" && currentOperation == "=") {
        futureOperation = ''
    }else if (futureOperation == "%") {
        console.log(currentValue);
        currentValue = currentValue / 100;
        display(currentValue);
    }else if (futureOperation == "+/-" && currentValue != 0) {
        console.log(currentValue);
        currentValue = currentValue * -1;
        display(currentValue);
    }else {
        lastValue = currentValue;
        currentValue = "";
        currentOperation = futureOperation;
    };
};

clear.addEventListener("click", function (){
    calculation('');
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
decimal.addEventListener("click", function (){
    calculation(".");
});
percent.addEventListener("click", function (){
    operation("%");
});
sign.addEventListener("click", function (){
    operation("+/-");
});