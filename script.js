const container = document.getElementById('container');
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clearBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const eraserBtn = document.getElementById('eraserBtn');
let color = 'black'
let colorInput = document.querySelector('#color');
const slider = document.querySelector('#slider');
let sizeValue = document.querySelector('#size-value');


createGrid(10,10);


slider.onchange = (e) => updateGrid(e.target.value);
slider.onmousemove = (e) => updateSizeValue(e.target.value);


function createGrid(rows, cols){
    removeGrid();
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(let i = 1; i <= (rows * cols); i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', colorCell);
        container.appendChild(cell).className = 'grid-item';
    }
}

function removeGrid(){
    container.innerHTML = '';
}

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} X ${value}`
  }

function updateGrid(num){
    createGrid(num,num)
}

function removeGrid(){
    container.innerHTML = '';
}

function changeColor(userColor){
    color = userColor;
}

colorInput.addEventListener('input', () => {
    color = colorInput.value;
})

//buttons determine the user color, that color is passed here to change mouseover color of cell action listener
function colorCell(){
    if((color === 'rainbow')){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else{
        this.style.backgroundColor = color;
    }
}

function resetBoard(){
    let cell = container.querySelectorAll('div');
    cell.forEach((div) => (div.style.backgroundColor = 'white'));
}

/*
submitBtn.addEventListener('click', () => {
    let input = document.getElementById("textbox").value;
    if (input > 0 && input <= 100 && !isNaN(input)){
        updateGrid(input);
    } else{
        grid.appendChild(error);
    }
});*/


clearBtn.addEventListener('click', () => {
    resetBoard();
    /*
    removeGrid();
    updateGrid(num);*/

});




