//script.js

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
console.log('d');
function makeGrid() {
  makeRows(8);
  makeColumns(8);
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
      //newCell.className.add("cell");
      //container.appendChild(newCell); //no quotations matter?
      newCell.innerHTML += 'div';
      rows[c].appendChild(newCell).className = "cell";
      console.log("derpy");
    }
  }
}
makeGrid();