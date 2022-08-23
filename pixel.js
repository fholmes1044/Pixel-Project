const color = document.getElementById("colorPicker");
const size = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");

makeGrid(5, 5);

size.addEventListener("submit", (event) => {
  event.preventDefault();

  while (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }

  let height = document.getElementById("inputHeight");
  let width = document.getElementById("inputWidth");
  makeGrid(height.value, width.value);
});

function makeGrid(height, width) {
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
