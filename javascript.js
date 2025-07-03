const container = document.querySelector (".container");
function grid(size){
    for (let i = 1; i < size; i++){
        const div = document.createElement("div");
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue";
        })
        div.style.flexBasis = "6.25%";
        container.appendChild(div);
    }
 
}

grid(257);

const button = document.querySelector(".selectSize");

button.addEventListener("click", () => {

    let size = prompt("What grid size would you like?", "Enter a value between 1-100")

    if (size > 100){
        alert("Value is too large, please enter a max value of 100")
    }else if (size < 1){
        alert("Value is too small. Please enter a minimum value of 1")
    }else{
        
    }
})