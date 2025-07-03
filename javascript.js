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

    let size = prompt("What grid size would you like?", "maximum 100x100")

})