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
const userPalette = document.getElementById('user-palette');
const selecColor = document.getElementById('select-color');

const size = () => {
  const size = parseInt(inputSizeValue.innerText);
  return size;

}

let color = 'black';

const clearBoard = () => {
  document.querySelectorAll('.pixel').forEach((pixel) => pixel.remove());
}

const paint = ({ target }) => {
  target.style.backgroundColor = color;
}

const generateBoard = () => {
  clearBoard();
  board.style.setProperty('--size', inputSizeValue.innerText)
  for(let index = 0; index < size() * size() ; index +=1) {
    const element = document.createElement('div');
    element.className = 'pixel';
    element.addEventListener('dragover', paint);
    board.appendChild(element);
  }
}

const generateRandomColor = () => {
  const randonNumber = parseInt(Math.random() * 255, 10);
  return randonNumber;
}
const getColor = (event) => {
  const { target } = event;
  console.log(event.button)
  if(event.button === 0) {
    color = target.style.backgroundColor;
  } else if (event.button === 2) {
    target.style.backgroundColor = color;
  }
}

const generatepalette = () => {
  for(let index = 0; index < 24; index +=1) {
    const element = document.createElement('div');
    element.className = 'palette';
    element.style.backgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`
    element.addEventListener('mousedown', getColor);
    userPalette.appendChild(element);
  }
}

const changeInputSizeValue = () => {
  const newValue = Number(inputSize.value);
  inputSizeValue.innerText = newValue;
  generateBoard(size());
}

const changeSampleBackgroundColor = () => {
  const newColor = inputColor.value;
  sample.style.backgroundColor = newColor;
  selecColor.style.border = 'rgb(255, 0, 0) 1px solid';
}

const resetBoard = () => {
  inputSize.value = 05;
  inputSizeValue.innerText = 05;
  generateBoard(size());
}
board.addEventListener('contextmenu', event => event.preventDefault());
userPalette.addEventListener('contextmenu', event => event.preventDefault());
selecColor.addEventListener('click', () => selecColor.style.borderColor = 'rgb(0, 255, 0)')
sample.addEventListener('click', getColor)
clear.addEventListener('click', resetBoard);
inputSize.addEventListener('input', changeInputSizeValue);
inputColor.addEventListener('input', changeSampleBackgroundColor, getColor);

window.onload = () => {
  changeSampleBackgroundColor();
  generateBoard(size());
  generatepalette();
};