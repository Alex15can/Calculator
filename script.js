currentValue = "";
lastValue = "";
currentOperation = "";
nextOperation = "";

function calculation(value) {
    if (value == "." && !currentValue.includes(".")) {
        currentValue += value;
        display(currentValue)
    };
    if (value == '') {
        currentValue = "";
        lastValue = "";
        currentOperation = "";
        nextOperation = "";
    };
    if (nextOperation != "=" && value != ".") {
        currentValue += value;
    };
    display(currentValue)
};

function display(value) {
    if (value == "") {
        value = 0;
    };
    document.getElementById("display").textContent=value;
};
function operation(nextOperation) {
    if (nextOperation == "%") {
        if (currentValue == "") {
            lastValue = lastValue/100;
            display(lastValue)
        }else {
            currentValue = currentValue/100;
            display(currentValue)
        };
    }else if (nextOperation == "+/-") {
        if (currentValue == "") {
            lastValue = lastValue*-1;
            display(lastValue)
        }else {
            currentValue = currentValue*-1;
            display(currentValue)
        };
    };
    if (currentOperation == "") {
        lastValue = currentValue;
        currentValue = '';
    } else if (currentOperation == "+" && currentValue != "" ){
        add();
    } else if (currentOperation == "-" && currentValue != "" ) {
        sub();
    } else if (currentOperation == "*" && currentValue != "" ) {
        mult();
    } else if (currentOperation == "/" && currentValue != "" ) {
        div();
    } else if (currentOperation == "=") {
    }
    currentOperation = nextOperation;
};

function add() {
    returnValue = Number(lastValue) + Number(currentValue);
    currentValue = "";
    lastValue = returnValue;
    display(returnValue)
};
function sub() {
    returnValue = Number(lastValue) - Number(currentValue);
    currentValue = "";
    lastValue = returnValue;
    display(returnValue)
};
function mult() {
    returnValue = Number(lastValue) * Number(currentValue);
    currentValue = "";
    lastValue = returnValue;
    display(returnValue)
};
function div() {
    returnValue = Number(lastValue) / Number(currentValue);
    currentValue = "";
    lastValue = returnValue;
    display(returnValue)
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