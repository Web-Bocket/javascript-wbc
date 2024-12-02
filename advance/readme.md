Javascript :- 

- javascript is used for building logics of a web page. 
- javascript is a high level programming language, used in both client side (frontend) and server side (backend).
- javascript is comes from echma script so we see the latest version of javascript in the form of echma script.
- Now we used javascript version 6 i.e (ES6 - echma script 6)
- In another way we called ES6 as the vanilla Javascript.
- Node js is the run time environment of Javascript. 

Variable in JS :- 

- variable is a container to store some data.
- in javascript there are 3 types of variable are there. 

1. let :- 

- let is a type of variable which is used for changing the variable name later
- Now these days, most of the cases we used let for creating varible.
- let is a block scope code so we have been used let for most of the cases. 

2. var :- 

- var is a type of variable which is also changing the variable name later.
- var is used in oldest browser so now these days we don't use var most of the cases. 

3. const :- constant

home work - explore the difference bet let & var. 

Rules for creating Variable Name :- 

- variable names are case sensative "a" & "A" is different.
- only digits, letter, underscore & special character is allowed.
- in variable name, white space is not allowed. 
- only letter, underscore & special character should be the 1st character only. 
- reserved words cannot be a variable name.

Datatypes in Javascript :- 

- Datatypes is an attribute associated with a piece of data that tells a computer system how to interprit its value. 
- in datatype we used "typeof" operator to know that, what type of data we used. 
- mainlly datatype are of 2 types. 

1. Primitive datatype :- 

- in javascript there are 7 type of primitive datatypes we used...

1. Number - Number are the type of datatype those it contains some numerical value.
2. String - string is a type of datatype that can hold some character like name, or words..
3. Boolean - in boolean we can use true & false
4. Null - in this datatype we get null for the value means nothing. (null !== 0)
5. bigInt - in bigInt we will get the big integer value
            (-999999999 to +999999999)
6. Undefined - data is not define
7. Symbol - in symbol we get one symbol for more than one value

2. Reference datatype

- regerence datatype are the type of datatype which can hold multiple element in a single time. 
- there are 3 types of reference datatype are there.. 
1. Array :- 

- array is a collection of similar type of data, stored in contigious memory location. 
- array index starts from "0". 
- ex. let gec = ["ram", "hari", "sita", "raban", "lokanath"]

2. Object :- 

- object is a reference type of datatype where we can store more than one element in a single frame. 
- mainlly object works on the basis of (key:value) pair. 
- ex :- 

let lokanath = {
    firstName : "loka",
    lastName : "nath",
    age : 58,
    CGPA : 8.9,
    carrier : "good"
}

- in this given example "lokanath" is our name of the objcet, left hand sides are the keys & right hand sides are the values of that key. 

3. Function :- 

- in function, we repeatedlly do the task so by use of code reusability and save space/time complexity we use function. 
- function reduce our code complexity.
- syntax :- 

function creation :- 
function my_schedule(){
    console.log("wake up at 11am")
    console.log("scroll ingragram reels")
    console.log("go for a pubg match in online")
    console.log("then eat & sleep")
}

function calling :- 
my_schedule()

Operator in javascript :- 

- operator are the key features to do some task or operate some task.
- ex A + B
- in this given example A & B are the operands & "+" is our operator. 
- there are 5 types of operator are there... 

1. arithmetic operator -> (+,-,*,/,%,**)
2. Logical operator -> Logical AND (&&), Logical OR (||), Logical NOT (!)
3. Assignment operator -> (=, +=, -=, *=, /=, %=, **=)
4. unary operator -> (++, --)
5. Compairision operator. -> (==, !==, ===)

Logical AND (&&) -> 

A  B  AND(&&)
T  T    T
T  F    F
F  T    F
F  F    F

Logical OR (||) -> 

A  B  OR(||)
T  T    T
T  F    T
F  T    T 
F  F    F 

conditional statement in Javascript :- 

- To implement some condition in the code.
- there are 3 types of conditional statement are there

1. if condition :- 

- if condition is true then statement is true. 
- syntax :- 
if(condition){
    // statement
}

2. if-else condition :- 

- if condition is true then statement is true otherwise false. 
- syntax :- 
if(condition){
    // statement
} else {
    // statement
}


3. if-elif condition / switch condition :- 

- its check the comdition multiple times, where the condition is true.
- syntax :- 
if (condition){
    // statement
} else if(condition){
    // statement
} else if(condition){
    // statement
} else {
    // statement
}

Loops in Javascript :- 

- loop are used to execute a piece a code again & again. 
- there are 5 types of loops are there...

1. For Loop :- 

- syntax :-
for(initialize; condition; updation){
    // statement
}

ex. print web-bocket 5 times.. 

for (let i = 1; i <= 5; i++){
    console.log("web-bocket")
}

working :- 

i = 1 -> web-bocket
i = 2 -> web-bocket
i = 3 -> web-bocket
i = 4 -> web-bocket
i = 5 -> web-bocket

2. while loop :- 

- syntax :- 
initialize;
while(condition){
    // statement
    // updation
}

ex. print "GEC" 7 times using while loop. 

let i = 1;
while(i <= 7){
    console.log("GEC");
    i++;
}

3. do-while loop :- 

- syntax :- 

initialize;
do {
    statement;
    updation;
} while (condition)

4. for-of loop -> it iterates on string & array
5. for-in loop -> it iterates on objects

String in Javascript :- 

- Basically string is a sequence of character used to represent text.
- create a string -> let str = "web bocket".
- we calculate the string length -> str.length property.
- we calculate the string index -> str[0], str[1], str[2]....

string literals :- 

- its a way to have embedded expression in a string.
- its denoted by ``.

string interpolation :- 

- to create string by doing substitution of placeholder. 
- ex. -> `string text ${expression} string text`

escape symbol in string :- 

1. \n -> new line
2. \t -> new tab

String Methods :- 

1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,(end-1))
5. str1.concat(str2)
6. str.replace(oldVal,newVal) -> its change the 1st sequence
7. str.replaceAll(oldVal,newVal) -> its change all value at a time.
8. str.charAt(idx)

Array in Javascript :- 

- array is a collection of element
- array index start from "0"
- ex. let arr = ["iron man", "hulk", "spider man"]
- arr[0], arr[1], arr[2]...

Looping over an Array :- 

- loop -> iteration
- syntax -> 
for(let i = 0; i < arr.length; i++){
    // statement
}

or for-of loop. 

practice question :- (10 min)

1. for a given array with marks of element -> [89,76,56,90,43,23,78].
   find the average marks of the entire class.
2. for a given array with price of 5 items -> [789,564,872,390].
   all items have an offer of 10% off of them, change the array to store final price after applying offer. 

Array methods on javascript :- 

1. push - adds an element to the end.
2. pop - remove from end
3. shift - remove an element to 1st position
4. unshift - adds an element to 1st position
5. toString - convert array to string
6. concat - join multiple array and return one single array
7. slice() - return a piece array
8. splice() - change original array (add, remove, replace)

Function In JS :- 

- it is a block of code that perform a specific task, can be invoked(called) 
whenever we need.
ex. (in-build function)

1. console.log("hello world") -> in that code log() is a function..
2. "abc".toUpperCase() -> toUpperCase() is a function..
3. [1,2,3].push(4) -> in this code push() is a function.. 

- there are 2 types of user defined function in javascript..
1. Normal Function :- 

-> Type A Function ->>> 

// function creation
function functionName(){
    // statement
}
// function calling
functionName()

-> Type B Function ->>>

// function creation
function functionName(parameter){
    // statement
}
// function calling
functionName(argument)

2. Arrow Function :- 

- its a compact way of writing function. 
- it uses map function to retrive the backend data, filter the function for filterise our data...
- syntax :- 

// function creation 
const functionName = (parameter) => {
    // do some task
}

// function calling
functionName(argument)

ex. of Normal Function -> 

function sum(a,b){
    retrun a + b;
}
sum(2,3)

ex. of Arrow Function -> 

var sum = (a,b) => {
    return a + b;
}
sum(2,3)

For-Each loop in Array :- 

- arr.forEach(callBackFunction)
- callBackFunction -> it is a function to execute for each element is the array
- a callback is a function passes as an argument to another function. 

Map Method/function :- 

- create a new array with the result of some operation. The value its callback returns are used to form a new array. Normally we can say, we create a new array by calling the function in every array element. 
- map does not change the original array. 
- it does not executte the function for empty array.
- syntax :- arr.map(callBackFnx (value,index,array)).

ex.
let newArr = arr.map((val) => {
    returns val * 2;
})

Filter Method / function :- 

- create a new array of element that gives true for a filteration. 
- ex. all even numbers..

let newArr = arr.filter((val) => {
    return val % 2 === 0;
})

DOM in Javascript :- 

- DOM stands for -> Document Object Model. 
- whan a web page is loaded, the browser create a document object model of that page.
- the HTML DOM model is constructed as a tree structure. 

Why we used DOM in Javascript :- 

- javascript can change all the HTML element in the page.
- javascript can create, delet or edit any HTML page directly.
- javascript can also access CSS styling directly. 

Windows object :- 

- the window object represents an open window in a browser. it is a browser object & it automatically created by browser. 
- it is also a global object with lots of properties & method.

DOM Manipulation :- 

1. Selecting with Id -> 
    document.getElementById("myId")

2. Selecting with Class -> 
    document.getElementsByClassName("myClass")

3. Selecting with Tag -> 
    document.getElementsByTagName("p")

4. Query Selector -> 
    - document.querySelector("id/class/tag")
    - document.querySelectorAll("id/class/tag")

5. Attributes -> 
    - getAttribute(attr) -> to get the attribute value
    - setAttribute(attr, value) -> to set the attribute value

6. Insert Element -> 
    - node.append(ele) -> adds at the end of node (inside)
    - node.prepend(ele) -> adds at the start of node (inside)
    - node.after(ele) -> adds after the node (outside)
    - node.before(ele) -> adds before the node (outside)

7. Delete element -> 
    - node.remove() -> remove the node

Event in Javascript :- 

- the change in the state of an object is known as event. 
- some famous events are :- 

1. Mouse event (click, double click)
2. Keyboard Event (keypress, keydown, keyup)
3. Form Events (submit)
4. Print Event ....etc..


Event Handling in Javascript :- 

- syntax -> 
node.event = () => {
    // handle here
}

Event Object in Javascript :- 

- it is a special object that has details about the event. 
- all event handler have access to the event objects properties and methods.
- syntax :-
node.event = (e) => {
    // handle here
}

in methods you can get -> e.target, e.type

Event Listener in Javascript :- 

- syntax :- 
-> node.addEventListenre(event, callback)
-> node.removeEventListenre(event, callback)

Note :- the callback reference should be same. 

practice Task :- 

1. create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again. 

Prototype(special object) in Javascript :- 

- a javascript object is an entity having state and behavior (properties & methods).
- JS object have a special property called prototype.
- we can set prototype using "__proto__".

Note :- if object and prototype have same methods , objects methods will be used.. 

Classes in Javascript :- 

- class is a program-code template for creating objects. 
- those objects will have some state(variable) & some behaviour (function) inside it. 
- syntax :- 

class myClass {
    constructor(){...}
    methods(){....}
}
let myObj = new myClass();

constructor :- 
- constructor is a special function that creates & initialize objects.
- it automatically invoked by "new" keyword.

Inheritance in Javascript :- 

- inheritance is passing down properties & methods from parent class to child class. 
- syntax :- 

class parent {
    // statement...
}
class child extends parent{
    // statement...
}

Note :- if child & parent have same property , child methods will be used(method overiding)


status code :- 

- 200 -> ok
- 201 -> created
- 202 -> accepted
- 300 -> multiple choice
- 302 -> found
- 400 -> bad request
- 402 -> payment required
- 404 -> Not found
- 406 -> not accepted
- 408 -> request timeout
- 500 -> internal server error
- 502 -> bad gateway
- 504 -> gateway timeout

Sync in Javascript :- 

synchronous :-  

- synchronous means the code runs in a particular sequence of 
instruction given in the program.
- Each instruction waits for the previous instruction to complete 
its execution.

ex. 

console.log("one")
console.log("two")
console.log("three")

output -> one, two , three

Asynchronous :- 

- Due to synchronous programming , sometimes imp. instruction get 
blocked due to some previous instruction, which couses a delay in the UI.
- Asynchronous code execution allows to execute next instruction immediatelly 
and doesn't block the flow

ex. 

console.log("one")
console.log("two")
setTimeout(() => {
    console.log("three")
}, 3000) // 3s = 3000 ms 
console.log("four")
console.log("five")

output -> one, two, four, five, three

callbacks in javascript :- 

- a callback is a function which passed as an argument of another function.

Callback hell :- 

- its a nested callback stacked below one another forming a pyramid structure. 
- this style of programming becomes difficult to understand & manage. 

promise :- 

- it is a solution of callback hell. 
- syntax :- 
let promise = new Promise((resolve, reject) => {
    // statement
})

- a javascript promise objects can be ->> 
1. pending  - the result is undefined
2. resolved - the rsult is a value (fulfilled)
3. rejected - the result is an error 

- promise.then((res) => {......})
- promise.catch((err) => {......})

Async & Await in Javascript :- 

- async function always returns a promise. 
- syntax :- 
async function myFunc(){
    // statement
}

Note :- await pauses the execution of its surrounding async function until the promise is settled. 

Fetch-Api :- 

- the fetch API provides an interface for fetching data.
- it uses Request & Response objects.
- The Fetch() method is used to fetch a data.
- syntax :- 
let promise = fetch(URL)




