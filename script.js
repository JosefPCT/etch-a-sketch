let init = 'Hello World';
console.log(init);

let numberOfSquares = 20;
let container = document.querySelector(".inside");

// for (let i = 0; i < numberOfSquares; i++){
//     console.log(`squares: ${numberOfSquares}`);
//     let newSquare = document.createElement('div');
//     newSquare.classList.add("square");
//     container.appendChild(newSquare);
//  }

// logic for creating grid based on input (numberOfSquares)
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