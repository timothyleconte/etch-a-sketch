const container = document.querySelector (".container");
function grid(size){

    let newSize = (size * size) + 1
    let flex = 100 / size

    for (let i = 1; i < newSize; i++){
        
        const div = document.createElement("div");
        div.classList.add("canvas")
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "rgb(80, 200, 120)";
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

const clearCanvas = document.querySelector (".clearCanvas");


grid(16);

clearCanvas.addEventListener("click", () =>{
    removeElements();
    grid(16);
})

const gridSize = document.querySelector(".gridSize");

gridSize.addEventListener("click", () => {

    let size = prompt("What grid size would you like?", "Enter a value between 1-100")

    if (size === null){
    }else if (size === "Enter a value between 1-100"){
        alert("You must enter a value");
    }else if (size > 100){
        alert("Value is too large, please enter a maximum value of 100")
    }else if (size < 1){
        alert("Value is too small. Please enter a minimum value of 1")
    }else{
        removeElements();
        grid(size);
    }
    clearCanvas.addEventListener("click", () =>{
    removeElements();
    grid(size);
    })
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
    
    if (size === null){
    }else if (size === "Enter a value between 1-100"){
        alert("You must enter a value");
    }else if (size > 100){
        alert("Value is too large, please enter a maximum value of 100")
    }else if (size < 1){
        alert("Value is too small. Please enter a minimum value of 1")
    }else{
        removeElements();
        gridRainbow(size);
    }
    clearCanvas.addEventListener("click", () =>{
    removeElements();
    gridRainbow(size);
    })
    
})

//start opacity work here; not yet working properly


function increasingOpacity(element, opacity){
    element.style.opacity = "opacity"
}

function opacityGrid(size){

    let newSize = (size * size) + 1;
    let flex = 100 / size;


    for (let i = 1; i < newSize; i++){
        
        const div = document.createElement("div");
        div.classList.add("canvas")
        div.style.backgroundColor = "white"
        div.addEventListener("mouseover", () =>{
        
            for (let i = 0.1; i < 1.1; i++)
            
            increasingOpacity(div, i)
        })
        div.style.flexBasis = flex + "%";
        container.appendChild(div);
};

}

let blackOut = document.querySelector(".blackOut");

blackOut.addEventListener("click", () => {

    let size = prompt("What grid size would you like?", "Enter a value between 1-100")

    if (size > 100){
        alert("Value is too large, please enter a maximum value of 100")
    }else if (size < 1){
        alert("Value is too small. Please enter a minimum value of 1")
    }else{
        removeElements();
        opacityGrid(size);
    }
    clearCanvas.addEventListener("click", () =>{
    removeElements();
    opacityGrid(size);
    })

})
