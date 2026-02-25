const container = document.querySelector(".container");
const btn = document.querySelector("button");
//const inputSize = document.querySelector("#size");




btn.addEventListener("click", (e) => {
    e.preventDefault();

    let newSize = prompt("put a number between 1 - 100");

    if(newSize > 0 && newSize <= 100 ){
        container.textContent = ""
        createGrid(newSize);

    } else if(newSize !== null) {
        alert("the size is invalid! Please enter a number between 1 - 100");  
        

    }
       
})

function createGrid(size){
    const gridSize = size * size;
    const flex = 100/size;

    for(let i = 0; i < gridSize; i++){
    const box = document.createElement("div");
        box.classList.add(`square`);
        box.style.width = `${flex}%`
        box.style.height = `${flex}%`
        box.style.backgroundColor = "rgb(44, 132, 173)";
        container.append(box);

    
    box.style.opacity = 0.2;
    
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = randomColor();
        let opacity = Number(box.style.opacity);

        if (opacity < 1){
            box.style.opacity = opacity + 0.1;
        }

        function randomColor(){
            const red =  Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);

            return `rgb(${red} ${green} ${blue})`;
        };
        });
    }
}

createGrid(16);