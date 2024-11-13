// TYpe A Function :-

// function myFunction(){
//     console.log("today is a beautiful day")
//     console.log("we learn js function")
// }

// myFunction()
// myFunction()
// myFunction()

// Type B Function :-

// function myFunction(a,b){ // parameter
//     console.log(a+b)
// } 
// myFunction(2,3) // argument

// 1. create a function using the "function" keyword that takes a string as 
// an argument & returns the number of vowels in that string. (TCS Interview Question)

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         ){
//             count++;
//         }
//     }
//     console.log(count)
// }
// countVowels("apple") 

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach( function printVal(val){ // normal function
//     console.log(val)
// })

// let arr = ["goa", "pune", "thane", "mumbai"]
// arr.forEach((val) => { // arrow function
//     console.log(val)
// })

// for a given array of numbers, print the square of each value using forEach loop. 

// let arr = [1,2,3,4,5,6,7]
// arr.forEach((nums) => {
//     console.log(nums * nums)
// })


// 1. create a function that reverse an array. 

// var arr = [1,2,3,4,5,6,7,8]
// let revArr = [];

// for(let i = arr.length - 1; i >= 0; i--){
//     revArr.push(arr[i]);
// }
// console.log("reverse arrayu: ", revArr)

// 2. create a function that filter out negative numbers.

// const arr = [12,78,-54,90,-23,-65,67]

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         console.log(arr[i])
//     }
// }

// 3. check if a string is a palindrome or not.
// ex. bob , bob 
// hint :- for loop & function 

// let nums = [6,8,3,2]


// map method  ->

// let newArr = nums.map((val) => {
//     return val*val;
// })

// console.log(nums)
// console.log(newArr)

// Filter method -> 

// let arr = [1,2,3,4,7,8,9]

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(evenArr)

// 1 % 2 = 1 !== 0 -> odd 
// 2 % 2 = 0 === 0 -> even 
// 3 % 2 = 1 !== 0 -> odd 
// 4 % 2 = 0 === 0 -> even 

// we are given array of marks of students. filter out of the marks of 
// students that scored more than 90

marks = [78,89,90,53,95,28,96]
let topper = marks.filter((val) => {
    return val >= 90;
})
console.log(topper)



