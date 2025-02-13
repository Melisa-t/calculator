let operators = document.querySelectorAll('.operator-btn')
let numbers = document.querySelectorAll('.number')
let display = document.getElementById('display')
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

let num1 = ``;
let num2 = ``;
let operator = ``;
let sum = ``;

// make dividing 0 impossible

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
}


for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click' , () => {
        if (num1 !== `` || operator !== ``) {
            display.textContent = `${num1} ` + operators[i].textContent + ` `
            operator = operators[i].textContent
        }
        else {
            alert('Please enter your first number!')
        }
       

      })
    }

for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click' , () => {
            display.textContent += numbers[i].textContent
            if (sum !== ``){
                num2 = ``
                operator = ``
                sum = ``
                num1 = numbers[i].textContent;
                display.textContent = num1 

                return

            }
            if (operator == `` && sum == ``) {
                num1 += numbers[i].textContent;


            } 
            
            else {
                num2 += numbers[i].textContent;
            } 

          })
        } 

 equal.addEventListener('click', ()=> {
    if (num1 == ``) {
        alert(`Please enter your first number!`)
        display.textContent = ``
        return

     } else if (num2 == ``) {
        alert(`Please enter your second number!`)
        num2 = ` `
        return

     }  
     sum = operateCalculator(Number(num1),Number(num2), operator)
     display.textContent = Number(sum)
     
        if (sum !== ``){
            num1 = Number(sum)
            num2 = ``;
        }

 })

clear.addEventListener("click", () => {
    display.textContent = ``
    num1 = ``
    num2 = ``
    operator = ``
    sum = ``
})
