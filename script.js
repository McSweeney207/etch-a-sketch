//HTML Query Selectors.
const gridContainer = document.querySelector(".grid-container");
const gridColumn = document.querySelector(".grid-column");
const gridSizeInput = document.getElementById("grid-size");

//Global Vairibles.
let gridSize = gridSizeInput.value;

//Creates grid using the users grid size selection.
function createGrid(){
    for (let x = 1; x <= gridSize; x++){ //Creates a new column.
        const divColumn = document.createElement('div');
        divColumn.setAttribute('id', `column${x}`);
        divColumn.classList.add('columns');
        gridColumn.appendChild(divColumn);

        for (let i = 1; i <= gridSize; i++){ //Fills column with divs.
            const divColumnBox= document.createElement('div');
            divColumnBox.setAttribute('id', `box${i}`);
            divColumnBox.classList.add('boxes');
            divColumn.appendChild(divColumnBox);
        }   
    }
}

//Clears Grid.
function clearGrid(){
    while (gridColumn.firstChild){
        gridColumn.removeChild(gridColumn.lastChild);
    }
}

//Creates intial grid on startup.
createGrid()

//Changes grid when user selects new value.
gridSizeInput.addEventListener('change', (event) => {
    gridSize = gridSizeInput.value;
    clearGrid();
    createGrid();
})    
