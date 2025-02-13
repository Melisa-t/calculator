let operators = document.querySelectorAll('.operator-btn')
let numbers = document.querySelectorAll('.number')
let display = document.getElementById('display')
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

let num1 = ``;
let num2 = ``;
let operator = ``;
let sum = ``;


function operateCalculator(num1, num2, operator){
    switch (operator) {
        case '+':
            return num1 + num2 
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
    console.log(num1, num2, operator)
}




for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click' , () => {
        display.textContent += operators[i].textContent
        operator = operators[i].textContent
        console.log(operator)

      })
    }

for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click' , () => {
            display.textContent += numbers[i].textContent
            if (operator == ``) {
                num1 += numbers[i].textContent;
                console.log(num1)

            } else {
                num2 += numbers[i].textContent;
                console.log(num2)

            }

          })
        } 

 equal.addEventListener('click', ()=> {
     sum = operateCalculator(Number(num1),Number(num2), operator)
     display.textContent = sum


 })

clear.addEventListener("click", () => {
    display.textContent = ``
    num1 = ``
    num2 = ``
    operator = ``
})
