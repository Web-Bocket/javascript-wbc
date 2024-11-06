// For-Loop
// Print "Web-Development" 10 times...

// for (let i = 1; i <= 10; i++){
//     console.log("Web-Development")
// }

// calculate the sum of 1 to 10 ??

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum = sum + i;
// }
// console.log("sum = :", sum)

// 0 = 0 + 1 = 1
// 1 = 1 + 2 = 3
// 3 = 3 + 3 = 6
// 6 = 6 + 4 = 10
// 10 = 10 + 5 = 15
// 15 = 15 + 6 = 21
// 21 = 21 + 7 = 28
// 28 = 28 + 8 = 36
// 36 = 36 + 9 = 45
// 45 = 45 + 10 = 55 

// while Loop 
// print "Development" 3 times in while loop.

// let i = 1;
// while (i <= 3){
//     console.log("Development")
//     i++;
// }

// Do-While Loop
//  Print "WBC" 6 times.. in do while loop.

// let i = 1;
// do {
//     console.log("WBC");
//     i++; 
// } while (i <= 6)

// WBC (statement will be print one time, then it will check the condition)
// i = 2 -> WBC 
// i = 3 -> WBC
// i = 4 -> WBC
// i = 5 -> WBC
// i = 6 -> WBC

// for-of Loop :- 

// let str = "web bocket"
// let arr = [1,2,3,4,5,6,7,8,9]
// let size = 0;
// for (let i of arr){
//     console.log(i)
//     size++;
// }
// console.log("size of the given string is: ",size) // 10

// For-in Loop :- 

let mishra = {
    name : "mishra babu",
    age : 67,
    CGPA : 8.9,
    isPass : true,
    Carrier : "good"
}
for (let i in mishra){
    console.log("key = ", i, "  value = ", mishra[i])
}
