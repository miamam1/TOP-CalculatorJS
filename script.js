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
        return operators[operator](number1,number2)
    }
    else {
        return console.log("you stupid")
    }
}
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