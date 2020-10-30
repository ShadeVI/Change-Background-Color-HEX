const btnEl = document.querySelector('.btn');
const bodyEl = document.querySelector('BODY');
const spanHEXEl = document.querySelector('.color-hex');

let prevColor

bodyEl.addEventListener('DOMContentLoaded', function() {
    prevColor = bodyEl.style.backgroundColor;
}() );

const HEXValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

let colorGenerated = '#';

function pickAColor(){
    for (let i = 0; i < 6; i++){
        let index = Math.floor( Math.random() * HEXValues.length);
        colorGenerated += HEXValues[index];
    }
    return colorGenerated;
}

function changeBackgroundColor() {
    let newColor = pickAColor();

    while (newColor === prevColor) {
        newColor = pickAColor();
    }

    bodyEl.style.backgroundColor = newColor;
    spanHEXEl.textContent = colorGenerated;

    prevColor = newColor;

    colorGenerated = '#';
}

btnEl.addEventListener('click', changeBackgroundColor)