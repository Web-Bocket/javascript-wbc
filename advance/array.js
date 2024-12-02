// let marks = [32,78,65,90,89,36];
// console.log(marks) // print total array
// console.log(marks.length) // 6
// console.log(marks[2]) // 65
// console.log(marks[4]) // 89

// let heros = ["iron man", "hulk", "sinchan", "doremon", "chotabhim"]

// for(let i = 0; i < heros.length; i++){
//     console.log(heros[i])
// }

// or 
// for(let i of heros){
//     console.log(i)
// }

// 1. for a given array with marks of element -> [89,76,56,90,43,23,78].
//    find the average marks of the entire class.

// let marks = [89,76,56,90,43,23,78];
// let sum = 0;
// for(let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class is ${avg}`)

// 2. for a given array with price of 4 items -> [789,564,872,390].
//    all items have an offer of 10% off of them, change the array to store final price after applying offer. 

// let items = [789,564,872,390];
// let i = 0;
// for (let val of items){
//     console.log(`value of index ${i} = ${val}`) // initial value
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`) // discounted value
//     i++;
// }

// let foodItem = ["burger", "pizza", "panipuri", "momos", "dahibara"]
// console.log(foodItem)
// foodItem.push("chats")
// console.log(foodItem)
// foodItem.push("masala cold drinks")
// console.log(foodItem)
// foodItem.pop()
// console.log(foodItem)
// foodItem.unshift("manchao soup")
// console.log(foodItem)
// foodItem.shift()
// console.log(foodItem)

// let marks = [56,89,90,53,98,56]
// console.log(marks)
// let mark = marks.toString();
// console.log(mark)

// let marvelHeros = ["thon", "hulk", "iron man","super man"]
// let odiaHeros = ["anubhab", "babushan", "lokanath", "sidhant"]

// let heros = marvelHeros.concat(odiaHeros)
// console.log(heros)

// splice method -> 

// let months = ["jan", "march","april","may","june"]
// console.log(months)
// months.splice(1,0,"fab")
// console.log(months)
// months.splice(5,1) 
// // splice(position to add/delet, no. of element, any replace item)
// console.log(months)

// slice method ->

let months = ["jan","fab", "march","april","may","june"]
console.log(months.slice(2,5))
console.log(months.slice(4)) // slice(start, end-1)
console.log(months.slice(0,3))
 

