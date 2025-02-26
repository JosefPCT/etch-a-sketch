let init = 'Hello World';
console.log(init);

let numberOfSquares = 24;
let container = document.querySelector(".inside");

for (let i = 0; i < numberOfSquares; i++){
    console.log(`squares: ${numberOfSquares}`);
    let newSquare = document.createElement('div');
    newSquare.classList.add("square");
    container.appendChild(newSquare);
}