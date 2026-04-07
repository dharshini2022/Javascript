const display = document.querySelector(".displayDiv");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.getElementById("AC");
const equalTo = document.getElementById("equalTo");

let currentDisplay = "";

numbers.forEach(button => {
    button.addEventListener("click", () => handleClick(button));
});

operators.forEach(button => {
    button.addEventListener("click", () => handleClick(button));
});

function handleClick(button){
    currentDisplay += button.innerText; 
    display.innerText = currentDisplay;
}

equalTo.addEventListener("click", () => {
    try{
        currentDisplay = eval(currentDisplay).toString(); 
        display.innerText = currentDisplay
    }catch{
        display.innerText = "Error";
        currentDisplay = "";
    }
});

clear.addEventListener("click",() => {
    currentDisplay = "";
    display.innerText="";
});
