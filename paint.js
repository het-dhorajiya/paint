const cont = document.querySelector(".container");
const reset = document.querySelector("button");
var number;
function getrandom() {
    return Math.floor(Math.random() * 256);
}
const body = document.body;
setInterval(()=>{
    let r = getrandom();
    let b = getrandom();
    let g = getrandom();
    let color = `rgb(${r},${b},${g})`;
    body.style.backgroundColor=color;

},90);


function grid(number) {
    for (let i = 1; i <= (number * number); i++) {
        const div = document.createElement("div");
        div.className = "box";
        div.style.width = `${(550 / number)}px`;
        div.style.height = `${(550 / number)}px`;
        cont.appendChild(div);
        let r = getrandom();
        let b = getrandom();
        let g = getrandom();
        let color = `rgb(${r},${b},${g})`;
        div.addEventListener("mouseover", () => {
            div.style.background = color;
        })
    }
}

reset.addEventListener('click',()=>{
    number = prompt("enter the number of box");
    console.log(number);    
    cont.innerHTML='';
    grid(number);
})

grid(25);
