function calculator(Num1,Num2,Opr){
if(typeof Num1 != typeof NaN || typeof Num2 != typeof NaN){
    console.log('Please enter in two numbers and an opperator')
}
else if(Opr == 'add'){
    let answer = Num1 + Num2
    console.log(answer)
}
else if(Opr == 'sub'){
    let answer = Num1 - Num2
    console.log(answer)
}
else if(Opr == 'multi'){
    let answer = Num1 * Num2
    console.log(answer)
}
else if(Opr == 'div'){
    let answer = Num1 / Num2
    console.log(answer)
}
}

calculator(3,2,'sub')
calculator(3,2,'add')
calculator(3,2,'multi')
calculator(3,2,'div')
calculator(3,'2','sub')