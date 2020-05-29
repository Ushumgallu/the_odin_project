let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const gridContainer = document.querySelector(".grid");
let gridSquares = document.querySelectorAll(".gridSquare");

document.querySelector("#clear").onclick = () => {resetGame()};

function generateGrid(number) {
    
    let gridTemplate = document.createElement('div');
    gridTemplate.classList.add("gridSquare");

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            let gridDiv = gridTemplate.cloneNode(true);
            gridDiv.setAttribute('id', `${i}-${j}`);
            gridContainer.appendChild(gridDiv);
        }
    }
}

function getRandomRGB() {
    let color = '';
    for (let i = 0; i < 3; i++) {
      color += Math.floor(Math.random() * 256).toString() + ',';
    }
    return color
}

function fillSquare() {

    let count = this.getAttribute('count');

    if (count == null) {
        this.setAttribute('count', 1);
        this.setAttribute('RGB', getRandomRGB());
    } else if (count >= 10) {
        null;
    } else {
        this.setAttribute('count', ++count)
    }

    this.style['background-color'] = `rgba(${this.getAttribute('RGB')}${1-count/10})`;
}

function resetGame(){
    clearGrid();

    rowNum = prompt("Enter grid size", rowNum);
    (rowNum > 64) ? rowNum = 64 : null;
    document.documentElement.style.setProperty("--rowNum", rowNum);
    generateGrid(rowNum);

    gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseenter', fillSquare));
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

function startGame(){
    clearGrid();

    rowNum = 32;
    (rowNum > 64) ? rowNum = 64 : null;
    document.documentElement.style.setProperty("--rowNum", rowNum);
    generateGrid(rowNum);

    gridSquares = document.querySelectorAll(".gridSquare");
    gridSquares.forEach(gridSquare => gridSquare.addEventListener('mouseenter', fillSquare));
}

startGame()