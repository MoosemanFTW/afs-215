const expect = require('chai').expect

function calculator(Num1,Num2,Opr){
    if(typeof Num1 != typeof NaN || typeof Num2 != typeof NaN){
        return('Please enter in two numbers and an opperator')
    }
    else if(Opr == 'add'){
        let answer = Num1 + Num2
        return(answer)
    }
    else if(Opr == 'sub'){
        let answer = Num1 - Num2
        return(answer)
    }
    else if(Opr == 'multi'){
        let answer = Num1 * Num2
        return(answer)
    }
    else if(Opr == 'div'){
        let answer = Num1 / Num2
        return(answer)
    }
    }

it('expect failing test', function(num1 = 3,num2 = '2'){
    expect(typeof num1 || typeof num2).to.not.equal(typeof NaN)
})

it('expect answer = 5', function(){
    expect(calculator(3,2,'add')).to.equal(5)
})

it('expect answer = 1', function(){
    expect(calculator(3,2,'sub')).to.equal(1)
})

it('expect answer = 6', function(){
    expect(calculator(3,2,'multi')).to.equal(6)
})

it('expect answer = 1.5', function(){
    expect(calculator(3,2,'div')).to.equal(1.5)
})