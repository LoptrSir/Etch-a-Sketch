//script.js

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = 0;
//let size = prompt("Input a number up to 100 for the desired grid size.");
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
  console.log("MG");
  const boxes = document.querySelectorAll(".cell");
boxes.forEach((box) => {
  box.addEventListener("mouseover", function handleMouseover(event) {
    console.log("mouseOver", event);
    if (box.style.background === "green") {
      boxes.setAttribute("style", "background-color: white;");
    } else {
      box.setAttribute("style", "background-color: green;");
    }
  });
});
});

function makeGrid() {
  makeRows(size);
  makeColumns(size);
  console.log("de");
}
function makeRows(numRow) {
  for (i = 0; i < numRow; i++) {
    //console.log(i);
    let row = document.createElement("div");
    //row.className.add("gridRow");
    container.appendChild(row).className = "gridRow";
    console.log("der");
  }
}

function makeColumns(numCell) {
  for (i = 0; i < rows.length; i++) {
    for (c = 0; c < numCell; c++) {
      let newCell = document.createElement("div");
      rows[c].appendChild(newCell).className = "cell";
      console.log("derpy");
    }
  }
}
//makeGrid();


//size = 0;
console.log("end");
