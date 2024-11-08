JAVASCRIPT :- 

- Javascript is used for building logics of a web page. 
- javascript is a high level programming language, used in both client side as well as server side. 
- javascript comes from echma script so we see the latest version of javascript in the form of echma script. 
- Now we used javascript version 6 i.e ES6 (echma script 6)
- In another way we called ES6 as the vanilla Javascript.
- Node JS is the run time environment of javascript. 

Variable :- 

- variable is a container to store some data.
- in javascript there are 3 types of variable are there...

1. var :-

- var is a type of variable which is used for changing the variable in later stage. 
- var is used in oldest browser so now a days we are don't use var most of the cases. 

2. let :- 

- let is a type of variable which is also used for changing the variable in later stage.
- Now these days, most of the cases we used let for changing the variable.
- let is a block scope code so we have been used let in most cases. 

3. const :- const means constant. 

Rules for creating variable name :- 

- variables names are case sensative "a" & "A" is different.
- Only letter, digits, underscore & special character is allowed. (do not keep white space over here).
- only letter, underscore or special character should be the 1st character only. 
- reserved words cannot be a variable name. 
ex. for, while, var , let, this, boolean etc... 

Datatype in Javascript :- 

- datatypes is an attributes associated with a peice of data that tells a computer system how to interprit its value. 
- in datatype we used "typeof" operator to know what type of data it is. 
- mainlly in javascript there are 2 type of datatypes are there. 

1. primitive Datatype :- 

- in javascript there are 7 types of primitive datatypes are there like..

1. Number - Numbera re the type of datatypes those it contains some numerical values
2. Boolean - in boolean datatype we got boolean value like true/false
3. Undefiend - data is not define
4. Null - in this datatype we got null for the value means nothing
5. bigInt - in bigint we will get the big integer value (-999999999 to +999999999) on the above.
6. String - string is a type of datatype that can hold some character like names or words etc.. 
7. Symbol - in symbol we got one symbol of more than one value.

2. Reference Datatype

- reference datatypes are the type of datatype which can hold multiple element in a single frame.
- reference datatypes are -> array, object, function

1. Array :- 

- Array is a coolection of similar type of datatype which can hold contigious memory location. 
- array indexing start from "0".

ex. let arr = ["hari", "sita", "ram"]
                 0        1       2

2. Object :- 

- object is a reference type of datatype where we can store more then one element is a single frame. 
- mainly object are working on (key:value) pair.

ex:- 

let hari = {
    "name" : "hari bandu sahoo",
    "phone no" : 56789032,
    "address" : "bhubaneswar",
    "carrier" : "good"
}

- in the above example left side element are the keys & right side elements are the values of that key. 

3. Function :- 

- in function, we repeatedlly do the task in a function.
- function reduce our code complexity and time & space complexity.
- syntax :- 

function -> 

function my_schedule(){
    console.log("we wake up at 6 am");
    console.log("we go for a morning walk")
}

function calling -> 

my_schedule();

Operator in JS :- 

- operator are the key features to do some task or operate some task.
- ex. A + B
- in the above example A & B are the operands, "+" is our operator. 
- in javascript, there are 5 types of operator re there.. 

1. Arithmetic operator -> (+,-,*,/), %(modulus), ** (exponent)
2. Assignment Operator -> (=,+=,-+,*=,/=,%=,**=)
3. compairision operator -> (==, !==, ===)
4. Logical operator -> Logical AND (&&), Logical OR (||), Logical NOT (!)
5. unary operator -> increament (++), decreament (--)

logical AND (&&)

A  B  AND(&&)

T  T    T
T  F    F
F  T    F
F  F    F 

Logical OR (||) 

A  B  OR(||)

T  T   T 
T  F   T 
F  T   T 
F  F   F  


conditional statement :- 

- to implement some condition in the code. 
- there are 3 types of conditional statements are there

1. if condition :- 

- if condition is true then statement is true.
- syntax :- 
if (condition){
    statement
}

2. if-else condition :- 

- if condition is true then sttement is true otherwise false.
- syntax :- 
if (condition){
    statement
} else {
    statement
}

3. if-elif condition or switch condition

- its check the comdition multiple times, where the condition is true, it returns the statement.
- if else if case. else condition if the default condition so if the condition doesn't satisfy any of the case then he print the default condition.

- syntax :- 
if (condition){
    statement
} else if(condition){
    statement
} else if(condition){
    statement
} else {
    statement
}

practice task :- 

write a code which can give grades to student according to their score. 
1. 80-100 (A)
2. 70-79 (B)
3. 60-69 (C)
4. 50-59 (D)
5. 0-49 (fail - go for aganwadi)

Loops in Javascript :- 

- loop are used to execute a piece of code again & again.
- there are 5 types of loop are there..

1. For Loop :- 

- syntax :- 
for (initialization; condition; updation){
    statement
}
ex. - we want to print "web Bocket" 5 times,

for (let i = 1; i <= 5; i++){
    console.log("Web Bocket)
}

working :- 

i = 1 -> web bocket
i = 2 -> web Bocket
i = 3 -> Web Bocket
i = 4 -> Web Bocket
i = 5 -> Web Bocket

2. While Loop :- 

- syntax :- 

initialize;
while (condition){
    statement;
    update;
}

ex -> Print "GIFT" 5 times.. in while loop

let i = 1
while (i <= 5){
    console.log("GIFT");
    i++;
}

3. Do-While Loop :- 

- syntax :-

initialize;
do {
    statement;
    updation;
} while (condition)

4. For-Of Loop :- it iterates on string & Array
5. For-In Loop :- it iterate on objects


String in Javascript :- 

- Basically String is a sequence of character used to represent text. 
- create a string -> let str = "web bocket".
- we calculate the string length -> str.length property.
- we calculate the string index -> str[0], str[1] ...etc

String Literals :- 

- its a way to have embedded expression in string.
- its denoted by symbol ``.

String Interpolation :- 

- to create string by doing substitution of placeholder.
- ex. -> string text ${expression} string text.

Escape symbol in String :- 

1. \n -> new line
2. \t -> new tab

String Method in Javascript :- 

1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,(end-1))
5. str1.concat(str2)
6. str.replace(oldVal, newVal) -> its checnge the 1st sequence
7. str.replaceAll(oldVal, newVal) -> its change all the old value
8. str.charAt(idx)

Array in Javascript :- 

- Array is a collection of items.
- ex. let heros = ["iron man", "bat man", "spyder man"]
- array index starts from "0".
- arr[0], arr[1] ....etc

looping over an Array :- 

- loop -> iteration
- syntax -> 
for (let i = 0; i < arr.length; i++){
    statement
}

practice question :- 

1. for a given array with marks of students -> [89,76,45,90,38,93]. find the average marks of the entire class. 
2. for a given array with price of 5 items -> [768,987,456,765,345]. all items have an offer of 10% off of them. change the array to store final price after applying offer. 

Array methods on javascript :- 

1. push - add an element to the end
2. pop - remove from the end
3. toString - convert array to string
4. concat - join multiple array and return one result
5. unshift - add an element to the start
6. shift - remove an element to the first
7. slice() - return a piece of the array
8. splice() - change original array (add, remove, replace)

Function in Javascript :- 

- it is a block of code that perform a specific task, can be invoked(called) whenever we need. 
- ex. (in-build function)

1. console.log("hello world") -> in that code log() is a function
2. "abc".toUpperCase() -> in this code toUpperCase() is a function
3. [1,2,3].push(4) -> in this code push() is a function. 

- there are two types of function in javascript.
1. Normal Function :- 

-> Type A function
// function creation
function functionName(){
    // do some task
}

// function calling
functionName()

-> Type B function
// function creation
function functionName(parameter){
    // do some task
}

// function calling
functionName(arguments)


2. Arrow Function :- 

- Its a compact way of writing a function.
- it uses map function to retrive the backend data, filter function for filterise our data... 

// function creation
const functionName = (parameter..) => {
    // do some task
}

// function calling
fuctionName()

Normal function ->  
function sum(a,b){
    return a + b;
}
sum(2,3);

Arrow Function -> 
const sum = (a,b) => {
    return a + b;
}
sum(2,3);

practice task :- 

1. create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in that string. (TCS Interview Question)





