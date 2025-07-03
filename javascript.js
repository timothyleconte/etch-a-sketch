const container = document.querySelector (".container")
function grid(){
    for (let i = 1; i < 257; i++){
        const div = document.createElement("div");
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue";
        })
        div.style.flexBasis = "6%";
        // div.textContent = "test";
        div.style.padding = "1px";
        // div.style.aspectRatio = "1/1";
        container.appendChild(div);
    }
 
}

grid()