// objects --->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const student = {
//     fullName : "lokanath parida",
//     marks: 94.9,
//     printMarks: function(){
//         console.log("marks = ", this.marks)
//     }
// }

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// }
// const lokanath = {
//     salary: 90000,
//     calcTax() {
//         console.log("tax rate is 20%")
//     }
// }
// lokanath.__proto__ = employee

// classes -->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// class ToyotaCar {
//     constructor(brand, milage, type){
//         console.log("creating new object")
//         this.brand = brand;
//         this.milage = milage;
//         this.type = type;
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }
// }
// let fortuner = new ToyotaCar("fortuner", 12, "disel");
// // fortuner.setBrands("fortuner")
// let lexus = new ToyotaCar("lexus", 9, "petrol");
// // lexus.setBrands("lexus")

// inheritance -->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// class Parent {
//     hello(){
//         console.log("hello")
//     }
// }

// class child extends Parent {

// }
// let obj = new child();

class person {
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    socialMedia(){
        console.log("scroll instagram")
    }
}
class Engineer extends person {
    work(){
        console.log("create problem, distribute problem, execute problem!!!")
    }
}

class CompEngineer extends person{
    work(){
        console.log("solve problem, organize problem, solved all problem")
    }
}

let lokanath = new Engineer();
let chand = new CompEngineer();