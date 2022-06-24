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
const randoPaletteContainer = document.getElementById('randon-palette-container');
const inputSizeInfo = document.getElementById('input-size-info');

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
  const size = number * number
  inputSizeInfo.innerHTML = `A tela possui ${size} pixels`
  for(let index = 0; index < size ; index +=1) {
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
  const newValue = Number(inputSize.value);
  inputSizeValue.innerText = newValue;
  generateBoard();
}

const changeSampleBackgroundColor = () => {
  const newColor = inputColor.value;
  sample.style.backgroundColor = newColor;
}

const resetBoard = () => {
  inputSize.value = 05;
  inputSizeValue.innerText = 05;
  generateBoard();
}
const getColor = () => {
  color = sample.style.backgroundColor;
}

const generateRandomColor = () => {
  const randonNumber = parseInt(Math.random() * 255, 10);
  return randonNumber;
}

const clearPalette = () => {
  document.querySelectorAll('.rndPalette').forEach((pixel) => pixel.remove());
}

const generateRandoPaletter = () => {
  clearPalette();
  for(let index = 0; index < paletteSize.value; index +=1) {
    const element = document.createElement('div');
    element.className = 'sample rndPalette';
    element.id = `rndPalette${[index]}`;
    element.style.backgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
    element.addEventListener('click', paint);
    randoPalette.appendChild(element);
  }
}
generatePalette.addEventListener('click', generateRandoPaletter)
sample.addEventListener('click', getColor)
clear.addEventListener('click', resetBoard);
inputSize.addEventListener('input', changeInputSizeValue);
inputColor.addEventListener('input', changeSampleBackgroundColor, getColor);
window.onload = () => {
  changeSampleBackgroundColor();
  generateBoard();
  generatepalette();
  generateColorPaletteDefault();
};