//script.js

const container = document.getElementById("container");
// is this line needed? yes, called in makeRows.
let rows = document.getElementsByClassName("gridRow");
// difference between Id and ClassName
let cells = document.getElementsByClassName("cell");
let size = 0;
console.log("d", size);

const button = document.getElementById("btn");
button.addEventListener("click", function handleClick(event) {
  size = prompt("Input a number up to 100 for the desired grid size.");
  console.log("1", size);
  while (size > 100 || isNaN(size)) {
    alert("Incorrect variable, try again. ");
    size = prompt("Input a number up to 100 for the desired grid size.");
    console.log("2", size);
  }
  makeGrid();
  console.log("MG", size);
  const boxes = document.querySelectorAll(".cell");
  //why syntax ',cell' is it always like this?
  boxes.forEach((box) => {
    box.addEventListener("mouseover", function handleMouseover(event) {
      console.log("mouseOver", event);
      if (box.style.background === "green") {
        boxes.setAttribute("style", "background-color: white;"); //what this line is doing.
      } else {
        box.setAttribute("style", "background-color: green;");
      }
    });
  });
});

function makeGrid() {
  container.replaceChildren();
  //best placement to clear container?
  makeRows(size);
  makeColumns(size);
  console.log("de");
}
function makeRows(numRow) {
  for (i = 0; i < numRow; i++) {
    let newRow = document.createElement("div");
    container.appendChild(newRow).className = "gridRow";
    console.log("der");
  }
}

function makeColumns(numCell) {
  for (
    i = 0;
    i < rows.length;
    i++ // is i loop really necessary if c is calling numCell which is the same as numRow?  I assume it has to do with the rows [c].appendChild below.
  ) {
    for (c = 0; c < numCell; c++) {
      let newCell = document.createElement("div");
      rows[c].appendChild(newCell).className = "cell";
      console.log("derpy");
    }
  }
}
console.log("end");
