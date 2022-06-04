const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn");
const clr = document.getElementById("color");

btn.addEventListener("click", function(){
    const rand = random();
    document.body.style.background = colors[rand];
    clr.textContent = colors[rand];
})

function random(){
    return Math.floor(Math.random()*colors.length);
}