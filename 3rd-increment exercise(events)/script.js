const incBtn = document.getElementById("incButton");
const decBtn = document.getElementById("decButton");
const counter = document.getElementById("count");

incBtn.addEventListener("click",(event) => {
    console.log("+ clicked");

    counter.innerText = Number(counter.innerText) + 1;

});
decBtn.addEventListener("click",(event) => {
    console.log("- clicked");

    counter.innerText = Number(counter.innerText) - 1;

});

