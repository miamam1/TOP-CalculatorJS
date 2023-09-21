let operators = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => a / b,
    //ok so trying to understand how this works i think:
    //when you use one of the operators as a key (e..g "+") it calls that arrow function
    //alot nicer looking and less code than writing four diff functions, tho knowing me
    // i will probably have to debug / rewrite this later 
}
//credit: https://stackoverflow.com/questions/67650776/is-there-a-way-to-store-an-arithmetic-operator-in-a-variable-and-use-the-variabl
function Calculations(number1, number2, operator) {
    if(operator in operators) {
        displayTotal.textContent = operators[operator](number1,number2)
        
    }
    else {
        return console.log("you stupid")
    }
} // run this function when clicking equals, then somehow make the first number the total from the calculation and deletable



//doesnt really work on bidmas btw
//the calculator only evaluates two numbers at a time, so if you pick a second operation, the reuslt
//of the first two numbers would show before doing further calcualtions.
//i.e. 23 + 23 - 2
//first step: 23 + 23 = 46
// 46 - 2
// on the calc would show 46 first, then 46 -2 then 42 if that makes sense 

//this might make my life harder but could try to condense the operator functions into one by:
// having the function have three parms, number 1, number2, and operator
// convert it 


function showInput(number) {
    if(symbol.innerHTML === "") {
        firstSumNumber.textContent += number
        return firstSumNumber

    }
    else {
        secondSumNumber.textContent += number
        return secondSumNumber
    }
     

}

function showSymbol(aSymbol) {
    if(aSymbol == "*") {
        symbol.innerHTML = "<span>&#215;</span>"
        symbolValue = aSymbol
        return symbolValue
    }
    if(aSymbol == "/") {
        symbol.innerHTML = "<span>&#247;</span>"
        symbolValue = aSymbol
        return symbolValue
    }
    else {
        symbol.textContent = aSymbol
        symbolValue = aSymbol
        return symbolValue
    }
    
}



function clearAllFN() {
    firstSumNumber.textContent = ""
    secondSumNumber.textContent = ""
    symbol.innerHTML = ""
    symbolValue = ""
    displayTotal.textContent = "0"
    

}

//could have an array which loops with the latest number addded and the previous number
// e.g. [0,1,2,3,5]
//running showinput would add this to the array, then when calling the function to calculate use index -1 to get last number and index.length -2 to get number before that one
// and use those as the two numbers
//but then also need to consider that would probably crash the program.. idk


const displaySum = document.getElementById("displaySum")
let firstSumNumber = document.getElementById("firstSumNumber")
let secondSumNumber = document.getElementById("secondSumNumber")
let symbol = document.getElementById("symbol")
let symbolValue
let displayTotal = document.getElementById("displayTotal")
const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
const number4 = document.getElementById("number4")
const number5 = document.getElementById("number5")
const number6 = document.getElementById("number6")
const number7 = document.getElementById("number7")
const number8 = document.getElementById("number8")
const number9 = document.getElementById("number9")
const number0 = document.getElementById("number0")


const allClear = document.getElementById("allClear")
const add = document.getElementById("add")
const dot = document.getElementById("dot")
const divide = document.getElementById("divide")
const equals = document.getElementById("equals")
const multiply = document.getElementById("multiply")
const minus = document.getElementById("minus")

number1.addEventListener('click', () => showInput(1))
number2.addEventListener('click', () => showInput(2))
number3.addEventListener('click', () => showInput(3))
number4.addEventListener('click', () => showInput(4))
number5.addEventListener('click', () => showInput(5))
number6.addEventListener('click', () => showInput(6))
number7.addEventListener('click', () => showInput(7))
number8.addEventListener('click', () => showInput(8))
number9.addEventListener('click', () => showInput(9))
number0.addEventListener('click', () => showInput(0))




equals.addEventListener('click', () => Calculations(parseFloat(firstSumNumber.textContent), parseFloat(secondSumNumber.textContent) , symbolValue))

//need to change multiply and divide to fit the span hhtml in quotes so it shows an actual * symbol and not *
multiply.addEventListener('click', () => showSymbol("*"))
divide.addEventListener('click', () => showSymbol("/"))
add.addEventListener('click', () => showSymbol("+"))
minus.addEventListener('click', () => showSymbol("-"))
dot.addEventListener('click', () => showInput("."))
allClear.addEventListener('click', () => clearAllFN())
//known problems:
/*
- need to implment second number functoianility cus rn its only first (could do a check for length for the symbol, and if its 0 then your still on the first num if 1 then your adding ot the second)
- no way to do minus calculations (e.g. -2 - - 2 )
- need to to implement clear and del funcionality
- * and / dont show the correct symbol on the screen, easy fix i think just go in dictionary used for checks and change the "*" and "/" to the html/css patern names



*/
