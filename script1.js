//script.js

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let size = 0; // why not use <let size = :>
console.log("d", size);
// button
const button = document.getElementById('btn');
button.addEventListener('click', function handleClick(event) {
size = prompt("Input a number up to 100 for the desired grid size.");
console.log('1', size);

while (size > 100 || isNaN(size)) {
  alert("Incorrect variable, try again. ");
  size = prompt("Input a number up to 100 for the desired grid size.");
  console.log(2,size);
  }
makeGrid(); // searches globally for function even if its after this call?
});

function makeGrid() {
  makeRows(size);
  makeColumns(size);
  console.log("de", size);
}
function makeRows(numRow) {
  // numRow- getting value from makeRows(size)?
  for (i = 0; i < numRow; i++) {
    // why is <i> unasigned element?
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
    // creating row- just for this iteration to make it append to 'gridRow'?
    console.log("der", size);
  }
}

function makeColumns(numCell) {
  for (i = 0; i < rows.length; i++) {
    // why is the abor for <i> needed?  To make the column nbr match rows?
    for (c = 0; c < numCell; c++) {
      let newCell = document.createElement("div");
      rows[c].appendChild(newCell).className = "cell";
      console.log("derpy", size);
    }
  }
}
//makeGrid();

const boxes = document.querySelectorAll(".cell");
boxes.forEach((box) => {
  box.addEventListener("mouseover", function handleMouseover(event){
  console.log("click", event);
  if (box.style.background === 'green'){
    boxes.setAttribute('style', 'background-color: white;')
  }else {
        box.setAttribute('style', 'background-color: green;')
    }
});
});

