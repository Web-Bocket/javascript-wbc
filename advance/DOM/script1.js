// let division = document.querySelector("div")
// console.log(division)

// let id = division.getAttribute("id");
// console.log(id);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass")) 
// you can set the attribute value

// let div = document.querySelector("div")

// div.style.backgroundColor = "green";
// div.style.color = "white";
// div.style.fontSize = "25px"
// div.innerText = "GEC"
// div.style.visibility = "hidden"

let newBtn = document.createElement("button");
newBtn.innerText = "click me"
console.log(newBtn)

let div = document.querySelector("div");
// div.append(newBtn)
// div.prepend(newBtn)
// div.before(newBtn)
div.after(newBtn)
// div.remove()

let para = document.querySelector("p")
para.remove()