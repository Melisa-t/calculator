let operators = document.querySelectorAll('.operator-btn')
let numbers = document.querySelectorAll('.number-btn')
let display = document.getElementById('display')
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

let num1 = [];
let num2 = [];
let operator = [];

 for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click' , () => {
        display.textContent += operators[i].textContent
      })
    }

for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click' , () => {
            display.textContent += numbers[i].textContent
          })
        } 

clear.addEventListener("click", () => {
    display.textContent = ``
})

function addNumbers(num1,num2) {
    return num1 + num2
}
function substractNumbers(num1,num2) {
    return num1 - num2
}
function multiplyNumbers(num1,num2) {
    return num1 * num2
}
function divideNumbers(num1,num2) {
    return num1 / num2
}

function operateCalculator(num1,num2, operator){
    switch (operator) {
        case '+':
            return addNumbers(num1,num2)
        case '-':
            return substractNumbers(num1,num2)
        case '*':
            return multiplyNumbers(num1,num2)
        case '/':
            return divideNumbers(num1,num2)
    }
}

