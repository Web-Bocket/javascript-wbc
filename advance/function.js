// Type - A function

// function myFunc(){
//     console.log("Today is a beautiful day");
//     console.log("we learn Javascript")
// }

// myFunc()
// myFunc()
// myFunc()

// Type - B function (paramiterized function)

// function myFunction(a, b, c) { // parameter -> variable name
//     console.log(a + b + c);
// }

// myFunction(4, 6, 8) // argument -> value
// myFunction(100, 348, 30)

// create a function using "function" keyword that takes a string as an argument & 
// returns the number of vowels in that string. (TCS Ninga - 2023)

// function countVowels(str){
//     let count = 0; //
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     console.log(count)
// }

// countVowels("lokanath") // 3


// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function printVal(val){  // normal function
//     console.log(val)
// })

// let arr = ["goa", "pune", "mumbai", "jajpur"]
// arr.forEach((val) => {  // arrow function passed as an callBackFunction 
//     console.log(val)
// })

// for a given array of numbers, print the square of each value using forEach loop. 
// arr = [1,2,3,4,5,6,7,8]

// let arr = [1,2,3,4,5,6,7,8]
// arr.forEach((nums) => {
//     console.log(nums * nums)
// })

// home work
// 1. create a function that reverse an array. arr = [1,3,4,7,8,9]

// var arr = [1,3,4,7,8,9];
// let revArr = [];

// for (let i = arr.length -1; i >= 0; i--){
//     revArr.push(arr[i]);
// }
// console.log("reverse array : ", revArr)

// 2. create a function that filter out negative Numbers. arr = [45,-90,-43,74,38]

// let arr = [45,-90,-43,74,38];
// for (let i = 0; i< arr.length; i++){
//     if(arr[i] < 0){
//         console.log(arr[i])
//     }
// }

// map method :- 

// let nums = [6,8,4,2,9]
// let newArr = nums.map((val) => {
//     return val * 2;
// })

// console.log(nums)
// console.log(newArr)

// filter method 

// let arr = [1,2,3,4,5,,6,7,8]

// let newArr = arr.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(newArr)

// working -> 
// 1 % 2 = 1  !== 0 -> odd 
// 2 % 2 = 0  === 0 -> even 
// 3 % 2 = 1  !== 0 -> odd 

// we are given a array of marks of student. filter out the marks of students that
// scored more than 90.


// let arr = [23,89,67,90,94,64,92]

// let newArr = arr.filter((val) => {
//     return val > 90;
// })

// console.log(newArr)



