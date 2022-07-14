module.exports = class User{
    constructor(name, age, num1, num2){
        this.name = name;
        this.age = age;
        this.num1 = num1;
        this.num2 = num2;
    }
    greeting(){
        console.log(`Hello there ${this.name}, age: ${this.age}`)
    }
    add(){
        return console.log(this.num1 + this.num2)
    }
    sub(){
        return console.log(this.num1 - this.num2)
    }
    muti(){
        return console.log(this.num1 * this.num2)
    }
    div(){
        return console.log(this.num1 / this.num2)
    }
    combineNums(){
        var stringNum1 = String(this.num1)
        var stringNum2 = String(this.num2)
        return console.log(stringNum1 + stringNum2)
    }
}

// let myUser = new User("Justin",25,6,2)
// myUser.greeting()
// myUser.add()
// myUser.sub()
// myUser.muti()
// myUser.div()
// myUser.combineNums()