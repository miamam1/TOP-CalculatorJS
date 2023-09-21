let operators = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => a / b,

}
let sillyguyCount = 0
//credit: https://stackoverflow.com/questions/67650776/is-there-a-way-to-store-an-arithmetic-operator-in-a-variable-and-use-the-variabl
function Calculations(number1, number2, operator) {
    if(secondSumNumber.textContent.length == 0) {
        return 
    }
    if(number2 == 0 && operator == "/") {
        alert("no.")
        sillyguyCount += 1
        if(sillyguyCount === 2) {
            alert("Hey! I already told you!")
            
        }
        if(sillyguyCount === 5) {
            alert("Whats your problem?")
        }
        if(sillyguyCount === 9) {
            alert("Try it again. I dare you.")
        }
        if(sillyguyCount === 10) {
            alert(">:(")
            close()
        }
        return 
        
    }
    
    if(firstSumNumber.textContent.length == 0) {
        number1 = 0
        firstSumNumber.textContent = "0"
    }

    
    if(operator in operators) {
        displayTotal.textContent = operators[operator](number1,number2)
        equalsSum.textContent = "="
        return firstSumNumberValue = operators[operator](number1, number2)
        
    }
    else {
        return console.log("you stupid")
    }
    
} 






function showInput(number) {
    if(symbol.innerHTML === "") {
        firstSumNumber.textContent += number
        

    }
    else {
        secondSumNumber.textContent += number
        
    }
     

}

function showSymbol(aSymbol) {
    if(equalsSum.textContent.length > 0) {
        equalsSum.textContent = ""
        firstSumNumber.textContent = displayTotal.textContent
        secondSumNumber.textContent = ""
        


    }
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
    equalsSum.textContent = ""
    

}


function deleteFN() {
    if(displayTotal.textContent.length > 0) {
        displayTotal.textContent = displayTotal.textContent.slice(0,-1)
        return
    }
    

    if(equalsSum.textContent.length > 0 ) {
        equalsSum.textContent = equalsSum.textContent.slice(0,-1)
        return 
    }
 

    if(secondSumNumber.textContent.length > 0) {
        secondSumNumber.textContent = secondSumNumber.textContent.slice(0, -1)
        return
        
    }

    if(symbol.textContent.length > 0) {
        symbol.textContent = symbol.textContent.slice(0,-1)
        return 
    }

    
    if(firstSumNumber.textContent.length > 0) {
        firstSumNumber.textContent = firstSumNumber.textContent.slice(0,-1)
        return
    }
}







const displaySum = document.getElementById("displaySum")
let firstSumNumber = document.getElementById("firstSumNumber")
let secondSumNumber = document.getElementById("secondSumNumber")

let symbol = document.getElementById("symbol")
let symbolValue
let displayTotal = document.getElementById("displayTotal")
let equalsSum = document.getElementById("equalsSum")
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
const delBTN = document.getElementById("delBTN")
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
delBTN.addEventListener('click', () => deleteFN())



equals.addEventListener('click', () => Calculations(parseFloat(firstSumNumber.textContent), parseFloat(secondSumNumber.textContent) , symbolValue))


multiply.addEventListener('click', () => showSymbol("*"))
divide.addEventListener('click', () => showSymbol("/"))
add.addEventListener('click', () => showSymbol("+"))
minus.addEventListener('click', () => showSymbol("-"))
dot.addEventListener('click', () => showInput("."))
allClear.addEventListener('click', () => clearAllFN())

//known problems:
/*

- no way to do minus calculations (e.g. -2 - - 2 )
- 



*/

window.onkeydown = function(event) {
    if(event.keyCode == 49) {
        showInput(1)
    }
    if(event.keyCode == 50) {
        showInput(2)
    }
    if(event.keyCode == 51) {
        showInput(3)
    }
    if(event.keyCode == 52) {
        showInput(4)
    }
    if(event.keyCode == 53) {
        showInput(5)
    }
    if(event.keyCode == 54) {
        showInput(6)
    }
    if(event.keyCode == 55) {
        showInput(7)
    }
    if(event.keyCode == 56) {
        showInput(8)
    }
    if(event.keyCode == 57) {
        showInput(9)
    }
    if(event.keyCode == 48) {
        showInput(0)
    }
    if(event.keyCode == 187) {
        showSymbol("+")
    }
    if(event.keyCode == 189) {
        showSymbol("-")
    }
    if(event.keyCode == 191) {
        showSymbol("/")
    }
    if(event.keyCode == 56) {
        showSymbol("*")
    }
    if(event.keyCode == 13) {
        Calculations(parseFloat(firstSumNumber.textContent), parseFloat(secondSumNumber.textContent) , symbolValue)

    }
    if(event.keyCode == 8) {
        deleteFN()

    }
    if(event.keyCode == 27) {
        clearAllFN()

    }
    //dot function 
    if(event.keyCode == 190) {
        showInput(".")

    }

}
