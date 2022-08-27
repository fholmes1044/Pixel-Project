//Acess the color picker, size picker, and canvas in global scope
const color = document.getElementById("colorPicker");
const size = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");
//Create a default grid
makeGrid(1, 1);
size.addEventListener("submit", (event) => {
  event.preventDefault();
//Clears the size that is currently being displayed 
  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  let height = document.getElementById("inputHeight");
  let width = document.getElementById("inputWidth");
  makeGrid(height.value, width.value);
  //desc create a grid of squares 
  //param int $width - number of squares representing the width of the grid
  //param int $height - number of squares representing the height of the grid
});

function makeGrid(height, width) {
  //desc displays the height and width using for loops based on the given height and width entered
  //desc allows users to display the color that was selected when the click event is triggered
  for (let i = 0; i < height; i++) {
    let row = table.insertRow(i);

    for (let j = 0; j < width; j++) {
      let cell = row.insertCell(j);

      cell.style.backgroundColor = "white";

      cell.addEventListener("click", function (event) {
        event.preventDefault();
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
