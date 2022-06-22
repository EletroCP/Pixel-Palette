const inputSizeValue = document.getElementById('input-size-value');
const inputSize = document.getElementById('input-size');
const inputColor = document.getElementById('input-color');
const sample = document.querySelector('.sample');
const clear = document.getElementById('clear');
const generatePalette = document.getElementById('generat-palette');
const paletteSize = document.getElementById('palette-size');
const randoPalette = document.getElementById('randon-palette');
const board = document.getElementById('board');
const palette = document.getElementById('palette');
const standardSamples = document.getElementById('standard-samples');

let color = 'black';

const clearBoard = () => {
  document.querySelectorAll('.pixel').forEach((pixel) => pixel.remove());
}

const paint = ({ target }) => {
  target.style.backgroundColor = color;
}

const generateBoard = () => {
  clearBoard();
  const number = parseInt(inputSizeValue.innerText);
  for(let index = 0; index < number ; index +=1) {
    const element = document.createElement('div');
    element.className = 'pixel';
    element.addEventListener('click', paint);
    board.appendChild(element);
  }
}

const generatepalette = () => {
  for(let index = 0; index < 6 ; index +=1) {
    const element = document.createElement('div');
    element.className = 'sample';
    element.addEventListener('click', paint);
    palette.appendChild(element);
  }
}

const generateColorPaletteDefault = () => {
  const colors = ['black', 'white', 'red', 'green', 'blue']
  for(let index = 0; index < 5 ; index +=1) {
    const element = document.createElement('div');
    element.className = 'sample';
    element.id = colors[index];
    element.style.backgroundColor = colors[index];
    element.addEventListener('click', paint);
    standardSamples.appendChild(element);
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
const getColor = () => {
  color = sample.style.backgroundColor;
}

sample.addEventListener('click', getColor)
clear.addEventListener('click', resetBoard);
inputSize.addEventListener('change', changeInputSizeValue);
inputColor.addEventListener('change', changeSampleBackgroundColor, getColor);
window.onload = () => {
  changeSampleBackgroundColor();
  generateBoard();
  generatepalette();
  generateColorPaletteDefault();
};