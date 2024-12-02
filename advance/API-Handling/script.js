let URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact")

let getFact = async () => {
    console.log("getting data..........")
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    factPara.innerText = data[0].text;
}