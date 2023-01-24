//HTML Query Selectors.
const gridContainer = document.querySelector(".grid-container");
const gridColumn = document.querySelector(".grid-column");
const gridSizeInput = document.getElementById("grid-size");
const clearGridButton = document.querySelector(".clear-grid");
//const grayScaleButton = document.querySelector(".gray-scale");
const rainbowButton = document.querySelector(".rainbow");
const blackButton = document.querySelector(".black");
const eraserButton = document.querySelector(".eraser");

//Global Vairibles.
let gridSize = gridSizeInput.value;
const backgroundWhite = 'rgb(255,255,255)';
const backgroundBlack = 'rgb(0,0,0)';
let backgroundRainbow = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
//const backgroundWhite = rgb(255,255,255); 
let colorSelected = backgroundBlack;

function randomColor(){
    return Math.floor((Math.random() * 256) + 1);
}

//Creates grid using the users grid size selection.
function createGrid(){
    for (let x = 1; x <= gridSize; x++){ //Creates a new column.
        const divColumn = document.createElement('div');
        divColumn.setAttribute('id', `column${x}`);
        divColumn.classList.add('columns');
        gridColumn.appendChild(divColumn);

        for (let i = 1; i <= gridSize; i++){ //Fills column with divs.
            const divColumnBox= document.createElement('div');
            divColumnBox.setAttribute('id', `box${x}-${i}`);
            divColumnBox.classList.add('boxes');
            divColumn.appendChild(divColumnBox);
        }; 
    };
};

//Clears Grid.
function clearGrid(){
    while (gridColumn.firstChild){
        gridColumn.removeChild(gridColumn.lastChild);
    };
};

//Selects all the boxes each time they are changed and adds event listeners.
function addBoxesListener(){

    let boxes = document.querySelectorAll(".boxes"); //selects boxes.

    //Sets event listners for when initially clicked.
    const buttonPressed = e => { 
        for (i = 0; i < boxes.length; i++){
            e.target.setAttribute('style', `background-color: ${colorSelected}`);
            boxes[i].addEventListener('mouseover', buttonHover); //Sets function to hover
            boxes[i].addEventListener('mouseup', buttonUp); //Removes event listeners when mouse is released.
        }
    }

    //Changes class of box.
    const buttonHover = e => { 
        e.target.setAttribute('style', `background-color: ${colorSelected}`);
    }

    //Removes event listener for mouseover.
    const buttonUp = e => { 
        for (i = 0; i < boxes.length; i++){
            boxes[i].removeEventListener('mouseover', buttonHover);
        }
    }

    //Add event listeners to each box.
    for (i = 0; i < boxes.length; i++){
        boxes[i].addEventListener('mousedown', buttonPressed);
    }
}

//Creates intial grid on startup.
createGrid();
addBoxesListener();

//Changes grid when user selects new value.
gridSizeInput.addEventListener('change', (event) => {
    gridSize = gridSizeInput.value;
    clearGrid();
    createGrid();
    addBoxesListener();
    colorSelected = backgroundBlack;
});

//Resets grid to last size.
clearGridButton.addEventListener('click', (event) => {
    clearGrid();
    createGrid();
    addBoxesListener();
    colorSelected = backgroundBlack;
});

blackButton.addEventListener('click', (event) => {
    colorSelected = backgroundBlack;  
});

eraserButton.addEventListener('click', (event) => {
    colorSelected = backgroundWhite;  
});

rainbowButton.addEventListener('click', (event) => {
    randomColor()
    colorSelected = backgroundRainbow;  
});