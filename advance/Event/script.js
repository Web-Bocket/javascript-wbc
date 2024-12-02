// let btn = document.querySelector("#btn")
// btn.onclick = (e) => {
//     console.log(e)
//     console.log(e.target);
//     console.log(e.type)
// }
// let btn1 = document.querySelector("#btn1")
// btn1.ondblclick = () => {
//     console.log("btn was clicked 2 times")
// }
// let para = document.querySelector("#para")
// para.onmouseover = (e) => {
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
// }


let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    console.log("button was clicked - handler 1")
})

btn.addEventListener("click", () => {
    console.log("button was clicked - handler 2")
})

const handler3 = () => {
    console.log("button was clicked - handler 3")
}
btn.addEventListener("click", handler3)

btn.addEventListener("click", (e) => {
    console.log("button was clicked - handler 4")
})

btn.removeEventListener("click", handler3)
