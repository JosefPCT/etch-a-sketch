# etch-a-sketch
Etch-a-sketch, create a grid via user input. Hover on each grid to change color, reset grid by using a button.

PSEUDOCODE:
GET user input to create grid
  IDEA: create button > add event listener > promp for user input > 
  store input in VARIABLE
DETERMINE grid based on user input
SET grid using javascript and flexbox, not HTML
  IDEA: create div container, then create number of divs based on user 
  input (eg. input: 3 grid: 3x3), flexbox: grow and shrink,
DETERMINE logic for hovering
  IDEA: add event listener to container. and use e.target to determine which was hovered, change the color

  EXTRA CREDIT:
  IMPLEMENT randomization of rgb values for each interaction
  	IDEA: math.random
  IMPLEMENT progressive darkening effect, each interaction by 10%
   IDEA: DECREMENT opaque value by 0.1
  IMPLEMENT logic IF input is > 50, make the .square width and length smaller