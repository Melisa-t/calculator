let operators = document.querySelectorAll('.operator-btn')
let numbers = document.querySelectorAll('.number')
let display = document.getElementById('display')
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");

let num1 = ``;
let num2 = ``;
let operator = ``;
let sum = ``;

function addNumbers (num1, num2) {
    return num1 + num2
}

function substractNumbers (num1, num2) {
    return num1 - num2
}

function multiplyNumbers (num1, num2) {
    return num1 * num2
}

function divideNumbers (num1, num2) {
    if (num1 == 0 || num2 == 0) {
        alert(`You know that's not possible!`)
        return 0
    } else {
        return num1 / num2
    }
    
}

// make dividing 0 impossible

function operateCalculator(num1, num2, operator){
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
           
            if (sum !== `` && operator == ``){
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

            display.textContent += numbers[i].textContent
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
     display.textContent = Number(sum.toFixed(4))
     
        if (sum !== ``){
            num1 = Number(sum.toFixed(4))
            num2=``
        } 
    operator = ``
 })

clear.addEventListener("click", () => {
    display.textContent = ``
    num1 = ``
    num2 = ``
    operator = ``
    sum = ``
})
