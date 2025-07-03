const container = document.querySelector (".container");
function grid(){
    for (let i = 1; i < 257; i++){
        const div = document.createElement("div");
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue";
        })
        div.style.flexBasis = "6.25%";
        container.appendChild(div);
    }
 
}

grid();

const button = document.querySelector(".selectSize");

button.addEventListener("click", () => {

    let size = prompt("What grid size would you like?", "maximum value of 100")

    if (size > 100){
        alert("Value is too large, please enter a max value of 100")
    }else if{
        
    }
})