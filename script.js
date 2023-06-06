const numberButtons = document.querySelectorAll(".data-number");
const operatorButtons = document.querySelectorAll(".operator");
let currentValue = "";
let newValue = "";
let previousOperator = "";

const screen = document.querySelector(".main-screen");
const historyScreen = document.querySelector(".history-screen");

// Action if one of the number buttons is clicked.
numberButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if(newValue != ""){
            screen.textContent = "";
            newValue = "";
        }
        
        if(!(screen.textContent.includes(".") && button.textContent == ".")){
            appendNumber(button.textContent);
        }
    })
})

// Action if one of the operator buttons is clicked
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        previousOperator = getOperation(button.textContent)});
})

// Function to add the content to the screen each time a button is clicked:
function appendNumber(number){
    screen.textContent += number;
    historyScreen.textContent += number;
}

function getOperation(operator){
    console.log(`currentValue when entering getOperation function is ${currentValue}`);

    switch(operator){
        case "AC":
            screen.textContent = "";
            historyScreen.textContent = "";
            currentValue = "";
            break;
        case "C":
            screen.textContent = screen.textContent.slice(0,-1);
            historyScreen.textContent = historyScreen.textContent.slice(0,-1);
            break;
        case "%":
            currentValue = currentValue/100;
            screen.textContent = currentValue;
            break;
        case "=":
            if (currentValue == ""){
                currentValue = screen.textContent;
                break;
            }
            else{
                newValue = screen.textContent;
                currentValue = executeOperation(currentValue,newValue,previousOperator);
                historyScreen.textContent = currentValue;
                newValue = "";
                currentValue = "";
            }
            break;
        default:
            if (currentValue != "" ){
            newValue = screen.textContent;
            currentValue = executeOperation(currentValue,newValue,previousOperator);
            historyScreen.textContent = `${currentValue}  ${operator} `;
            console.log(`TEST2 - currentValue:${currentValue}`);
            }
            else if(currentValue == ""){
                currentValue = screen.textContent;
                screen.textContent = "";
                historyScreen.textContent = `${currentValue} ${operator} `;
                console.log(`TEST1 - currentValue:${currentValue} newValue: ${newValue}`);
            }
            return operator;
    }

    return previousOperator;
}

function executeOperation(currentValue,newValue,operator){

    currentValue = Number(currentValue);
    newValue = Number(newValue);

    switch(operator){
        case "+":
            currentValue = currentValue + newValue;
            screen.textContent = currentValue
            console.log(`currentValue after addition is: ${currentValue}`)
            break;
        case "-":
            screen.textContent = currentValue - newValue;
            currentValue = screen.textContent;
            break;
        case "X":
            screen.textContent = currentValue * newValue;
            currentValue = screen.textContent;
            break;
        case "/":
            screen.textContent = currentValue / newValue;
            currentValue = screen.textContent;
            break;
    }

    return currentValue;
}

