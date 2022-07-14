module.exports = class goodDay{
    timeOfDay(inputNum){
        if(inputNum % 3 == 0 && inputNum % 7 == 0){
            return console.log('Good Evening')
        }
        else if(inputNum == 7 || inputNum % 7 == 0){
            return console.log('Good Afternoon')
        }
        else if(inputNum == 3 || inputNum % 3 == 0){
            return console.log('Good Morning')
        }
        else if(inputNum % 3 != 0 && typeof inputNum == typeof NaN|| inputNum % 7 != 0 && typeof inputNum == typeof NaN){
            let strNum = String(inputNum)
            return console.log(strNum)
        }
        else if(typeof inputNum != typeof 8){
            return console.log('Please enter a Number and try again')
        }
        else{
            return console.log('Something has gone terribly wrong')
        }
    }
}