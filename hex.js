const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const clr = document.getElementById("color");

btn.addEventListener("click", function(){
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor += colors[random()];
    }

    document.body.style.background = hexColor;
    clr.textContent = hexColor;
})

function random(){
    return Math.floor(Math.random()*colors.length);
}