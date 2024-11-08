// let marks = [32,34,56,98,78,90]
// console.log(marks);
// console.log(marks.length)
// console.log(marks[2])
// console.log(marks[6])

// let heros = ["iron man", "bat man", "spyder man", "hulk", "super man"]

// for (let i = 0; i < heros.length; i++){
//     console.log(heros[i])
// }

// for (let i of heros){
//     console.log(i.toUpperCase())
// }


// 1. for a given array with marks of students -> [89,76,45,90,38,93]. find the average marks of the entire class. 

// let marks = [89,76,45,90,38,93]
// let sum = 0;
// for (let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`avg of marks of the class = ${avg}`);

// 2. for a given array with price of 5 items -> [768,987,456,765,345]. all items have an offer of 10% off of them. change the array to store final price after applying offer. 

// let items = [768,987,456,765,345]
// let i = 0;
// for (let val of items){
//     console.log(`value of index ${i} = ${val}`); // initial vbalue
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`) // discounted value
//     i++;
// }

// let foodItem = ["burger", "pizza", "momos", "pani-puri"]
// console.log(foodItem)
// foodItem.push("dahibara", "masala-dosa")
// console.log(foodItem)
// foodItem.pop()
// foodItem.pop()
// console.log(foodItem)
// foodItem.unshift("banana")
// console.log(foodItem)
// foodItem.shift()
// console.log(foodItem)

// let marks = [23,45,78,94,76]
// console.log(marks) // array
// let mark = marks.toString();
// console.log(mark) // string


// let marvelHeros = ["thon", "ironman", "batman"]
// let odiaHeros = ["anubhab", "babushan"]

// let heros = marvelHeros.concat(odiaHeros)
// console.log(heros)

// splice method -> 
// let months = ["jan","march","april","june"]
// console.log(months)
// months.splice(1,0,"fab")
// console.log(months)
// months.splice(4,0,"may")
// console.log(months)

// slice method -> 
const animals = ["tiger", "lion", "camel", "horse", "elephant", "cow", "zebra", "monkey"]
console.log(animals) // all print
console.log(animals.slice(2)) // "camel", "horse", "elephant", "cow", "zebra", "monkey"
console.log(animals.slice(2,4)) //  "camel", "horse"
console.log(animals.slice(-2)) //  "zebra", "monkey"
console.log(animals.slice(2,-1)) //  "camel", "horse", "elephant", "cow", "zebra"







