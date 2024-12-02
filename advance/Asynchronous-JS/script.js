// asynchronous code example ->>> 

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("hello")
// }, 4000) // 4s = 4000 ms
// console.log("four")
// console.log("five")


// callback function example ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function sum(a, b){ // normal function
//     console.log(a + b) 
// }

// function calc(a, b, sumCallback){ // main/callback function
//     sumCallback(a, b)
// }

// calc(1, 2, sum) // function passed as an argument - (sum)


// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId)
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }

// // callback-hell
// console.log("getting data-1.....")
// getData(1, () => {
//     console.log("getting data-2.....")
//     getData(2, () => {
//         console.log("getting data-3.....")
//         getData(3, () => {
//             console.log("getting data-4.....")
//             getData(4, () => {
//                 console.log("getting data-5.....")
//                 getData(5)
//             })
//         })
//     });
// })

// promise in example 

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("i am a promise")
//         // resolve("success")
//         reject("some network issue is occured")
//     }, 8000)
// })

// solution of callback hell ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("success")
//             // reject("error")
//         }, 2000)
//     })
// }

// getData(1)
//     .then(() => {
//         return getData(2)
//             .then(() => {
//                 return getData(3)
//                     .then(() => {
//                         return getData(4)
//                             .then(() => {

//                             })
//                     })
//             })
//     })

// .then & .catch example1 -->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promise")
//         // resolve("success")
//         reject("error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res)
// })

// promise.catch((err) => {
//     console.log("promise rejected", err)
// })

// .then & .catch example2 -->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function AsyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data-1")
//             resolve("success")
//         }, 4000)
//     })
// }

// function AsyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data-2")
//             resolve("success")
//         }, 4000)
//     })
// }

// function AsyncFunc3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data-3")
//             resolve("success")
//         }, 4000)
//     })
// }


// console.log("getting data 1.............")
// AsyncFunc1().then(() => {
//     console.log("getting data 2.............")
//     AsyncFunc2().then(() => {
//         console.log("getting data 3.............")
//         AsyncFunc3().then(() => {})
//     })
// })

// output  ->  get data 1, data 1, success, get data 2, data 2 , success

// Async & await example ------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function Api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("wheather app")
//             resolve("success")
//         }, 3000)
//     })
// }

// async function getWheatherData(){
//     await Api();
// }

// Async-await in callback hell example ---->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
            // reject("error")
        }, 2000)
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
}

