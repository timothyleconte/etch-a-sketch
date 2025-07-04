const container = document.querySelector (".container");
function grid(size){

    let newSize = (size * size) + 1
    let flex = 100 / size

    for (let i = 1; i < newSize; i++){
        
        const div = document.createElement("div");
        div.classList.add("canvas")
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue";
        })
        div.style.flexBasis = flex + "%";
        container.appendChild(div);
    }
 
}

function removeElements(){
    const divNode = document.querySelectorAll("div.canvas");

    divNode.forEach(element =>{
        element.remove();
        });
        }

grid(16);

const gridSize = document.querySelector(".gridSize");

gridSize.addEventListener("click", () => {

    let size = prompt("What grid size would you like?", "Enter a value between 1-100")

    if (size > 100){
        alert("Value is too large, please enter a maximum value of 100")
    }else if (size < 1){
        alert("Value is too small. Please enter a minimum value of 1")
    }else{
        removeElements();
        grid(size);
    }
})


function randomColor (){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return "rgb(" + `${red}, ${blue}, ${green}` + ")";

};


function gridRainbow(size){

    let newSize = (size * size) + 1
    let flex = 100 / size

    for (let i = 1; i < newSize; i++){
        
        const div = document.createElement("div");
        div.classList.add("canvas")
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = randomColor();
        })
        div.style.flexBasis = flex + "%";
        container.appendChild(div);
    }
 
}



const rainbowMode = document.querySelector(".rainbowMode");

rainbowMode.addEventListener("click", () => {
    
    let size = prompt("What grid size would you like?", "Enter a value between 1-100")

    if (size > 100){
        alert("Value is too large, please enter a maximum value of 100")
    }else if (size < 1){
        alert("Value is too small. Please enter a minimum value of 1")
    }else{
        removeElements();
        gridRainbow(size);
    }
    
})
