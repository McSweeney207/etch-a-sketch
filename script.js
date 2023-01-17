const gridContainer = document.querySelector(".grid-container");
const gridRow = document.querySelector(".grid-row");
const gridColumn = document.querySelector(".grid-column");

gridSize = 16;

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
