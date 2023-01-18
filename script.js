//HTML Query Selectors.
const gridContainer = document.querySelector(".grid-container");
const gridRow = document.querySelector(".grid-row");
const gridColumn = document.querySelector(".grid-column");
const gridSizeInput = document.getElementById("grid-size");

//Global Vairibles.
let gridSize = gridSizeInput.value;

//Creates grid using the users grid size selection.
function createGrid(){
    for (let x = 1; x <= gridSize; x++){
        const divRow = document.createElement('div');
        divRow.setAttribute('id', `row${x}`);
        divRow.classList.add('rows');
        gridRow.appendChild(divRow);

        for (let i = 1; i <= gridSize; i++){
            const divColumn = document.createElement('div');
            divColumn.setAttribute('id', `column${i}`);
            divColumn.classList.add('boxes');
            divColumn.textContent = i;
            divRow.appendChild(divColumn);
        }   
    }
}

//Clears Grid.
function clearGrid(){
    while (gridRow.firstChild){
        gridRow.removeChild(gridRow.lastChild);
    }
}

//Creates intial grid on startup.
createGrid()

//Changes grid when user selects new value.
gridSizeInput.addEventListener('change', (event) => {
    gridSize = gridSizeInput.value;
    console.log(gridSizeInput.value);
    clearGrid();
    createGrid();
})    
