let init = 'Hello World';
console.log(init);

let numberOfSquares = 30;
let setupButton = document.querySelector("button");

setupButton.addEventListener("click", setupGrid);


function askUserInput(){
    return prompt("Grid Size"); 
}

// 
function createGrid(numberOfSquares){
    let container = document.querySelector(".inside");
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

// function to remove currentGrid, via removing child of a the container, then creating another one.
function refreshGrid(){
    let parentOfCurrentGrid = document.querySelector(".container")
    let currentGrid = parentOfCurrentGrid.firstElementChild;
    let newGrid = document.createElement("div");
    newGrid.classList.add('inside');

    parentOfCurrentGrid.removeChild(currentGrid);
    parentOfCurrentGrid.appendChild(newGrid);
}


function setupGrid(){
    let input =  askUserInput();
    console.log(input);
    refreshGrid();
    createGrid(input);
 }
