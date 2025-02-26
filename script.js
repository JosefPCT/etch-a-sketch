let init = 'Hello World';
console.log(init);

let numberOfSquares = 30;
let container = document.querySelector(".inside");
let setupButton = document.querySelector("button");

setupButton.addEventListener("click", setupGrid);

function setupGrid(){
   let input =  askUserInput();
   console.log(input);
}

function askUserInput(){
    return prompt("Grid Size"); 
}


function createGrid(numberOfSquares){
    for (let i = 0; i < numberOfSquares; i++){
        let newRow = document.createElement("div")
        newRow.classList.add("row");
        container.appendChild(newRow);
        for(let j = 0; j < numberOfSquares; j++){
            console.log(`squares: ${numberOfSquares}`);
            let newSquare = document.createElement('div');
            newSquare.classList.add("square");
            newRow.appendChild(newSquare);
        }
    }
}

