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


function HandleMultiples(arg){
    if(arg % 3 == 0 && arg % 7 == 0){
        let newArg = 37
        return newArg
    }
    else if(arg % 3 == 0){
        let newArg = 3
        return newArg
    }
    else if(arg % 7 == 0){
        let newArg = 7
        return newArg
    }
    else if(typeof arg != typeof NaN){
        let newArg = 1
        return newArg
    }
    else{
        let newArg = 0
        return newArg
    }
}

function returnStuff(arg){
    switch(HandleMultiples(arg)){
        case 0:
            let StrNum = arg
            let ResultingString = StrNum.toString()
            return ResultingString
        case 1:
            return ('Please enter in a number')
        case 3:
            return ('Good Morning');
        case 7:
            return ('Good Afternoon')
        case 37:
            return ('Good Evening')
        default:
            return ('Something went wrong')
    }
    }
    
    
    it('ReturnStuff tests', function(){
        expect(returnStuff(1)).to.equal(1)
    })
    
    it('expect "1"', function(){
        expect(returnStuff(1)).to.equal('1')
    })

    it('expect "2"', function(){
        expect(returnStuff(2)).to.equal('2')
    })

    it('expect "Good Morning"', function(){
        expect(returnStuff(3)).to.equal('Good Morning')
    })

    it('expect "Good Morning" when given multi of 3', function(){
        expect(returnStuff(6)).to.equal('Good Morning')
    })

    it('expect "Good Afternoon"', function(){
        expect(returnStuff(7)).to.equal('Good Afternoon')
    })

    it('expect "Good Afternoon" when given a multi of 7', function(){
        expect(returnStuff(14)).to.equal('Good Afternoon')
    })
    
    it('expect "Good Evening" when given a multi of 3 and 7', function(){
        expect(returnStuff(21)).to.equal('Good Evening')
    })

    it('expect an error message', function(){
        expect(returnStuff('this is not a number')).to.equal('Please enter in a number')
    })