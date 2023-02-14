const containerDiv = document.querySelector("#container");
const removeBtn = document.querySelector("#remove-grid");
const newGrid = document.querySelector("#new-grid");

function makeRow(rowLength) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < rowLength; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    const opacity = i < 10 ? i / 10 : 1;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgba(255, 0, 0, ${opacity})`;
    });

    row.append(square);
  }
  return row;
}
const row1 = makeRow(16);

/**
 *
 * @param {number} columnNumber
 * @param {number} rowLength
 */
function makeGrid(columnNumber, rowLength) {
  for (let i = 0; i < columnNumber; i++) {
    const row = makeRow(rowLength);
    containerDiv.append(row);
  }
}

function clearGrid() {
  containerDiv.innerHTML = "";
}

removeBtn.addEventListener("click", () => {
  clearGrid();
});

newGrid.addEventListener("click", () => {
  const size = prompt("Insert size of the grid! 1 to 100");
  const sizeToNumb = parseInt(size);

  if (size > 100) {
    alert("Error you inserted a number greather than 100");
  }
  clearGrid();

  makeGrid(sizeToNumb, sizeToNumb);
});

makeGrid(16, 16);
