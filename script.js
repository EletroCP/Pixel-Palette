const inputSizeValue = document.getElementById('input-size-value');
const inputSize = document.getElementById('input-size');
const inputColor = document.getElementById('input-color');
const sample = document.getElementById('sample');
const clear = document.getElementById('clear');
const generatePalette = document.getElementById('generat-palette');
const paletteSize = document.getElementById('palette-size');
const randoPalette = document.getElementById('randon-palette');
const board = document.getElementById('board');

const clearBoard = () => {
  document.querySelectorAll('.pixel').forEach((pixel) => pixel.remove());
}

const generateBoard = () => {
  clearBoard();
  const number = parseInt(inputSizeValue.innerText);
  for(let index = 0; index < number ; index +=1) {
    const element = document.createElement('div');
    element.className = 'pixel';
    board.appendChild(element)
  }
}

const changeInputSizeValue = () => {
  const newValue = inputSize.value;
  inputSizeValue.innerText = newValue;
  generateBoard();
}

const changeSampleBackgroundColor = () => {
  const newColor = inputColor.value;
  sample.style.backgroundColor = newColor;
}

const resetBoard = () => {
  inputSize.value = 5;
  inputSizeValue.innerText = 5;
  generateBoard();
}

clear.addEventListener('click', resetBoard);
inputSize.addEventListener('change', changeInputSizeValue);
inputColor.addEventListener('change', changeSampleBackgroundColor);

window.onload = () => {
  changeSampleBackgroundColor();
  generateBoard();
};