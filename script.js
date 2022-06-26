const inputSizeValue = document.getElementById('input-size-value');
const inputSize = document.getElementById('input-size');
const inputColor = document.getElementById('input-color');
const sample = document.querySelector('.sample');
const clear = document.getElementById('clear');
const generatePalette = document.getElementById('generat-palette');
const board = document.getElementById('board');
const palette = document.getElementById('palette');
const userPalette = document.getElementById('user-palette');
const selecColor = document.getElementById('select-color');
const eraser = document.getElementById('eraser');

const size = () => {
  const size = parseInt(inputSizeValue.innerText);
  return size;

}

const clearBoard = () => {
  document.querySelectorAll('.pixel').forEach((pixel) => pixel.remove());
}

const paint = (event) => {
  const { target } = event;
  if (event.button === 0) {
    target.style.backgroundColor = color;
  } else if (event.button === 3) {
    target.style.backgroundColor = 'rgb(61, 61, 61)';
  }

}

const generateBoard = () => {
  clearBoard();
  board.style.setProperty('--size', inputSizeValue.innerText)
  for (let index = 0; index < size() * size(); index += 1) {
    const element = document.createElement('div');
    element.className = 'pixel';
    element.addEventListener('dragover', paint);
    element.addEventListener('click', paint);
    board.appendChild(element);
  }
}

const generateRandomColor = () => {
  const randonNumber = parseInt(Math.random() * 255, 10);
  return randonNumber;
}
const getColor = (event) => {
  const { target } = event;
  if (event.button === 0) {
    color = target.style.backgroundColor;
  } else if (event.button === 2) {
    target.style.backgroundColor = color;
  }
}

const getPaletteColor = ({ target }) => {
  const newColor = target.style.backgroundColor;
  sample.style.backgroundColor = newColor;
  selecColor.classList.add('select');
}

const select = ({ target }) => {
  const select = document.querySelectorAll('.select');
  if (select.length > 0) {
    select.forEach((element) => {
      element.classList.remove('select')});
    return target.classList.add('select');
  }
  target.classList.add('select');
 }

const generatepalette = () => {
  for (let index = 0; index < 24; index += 1) {
    const element = document.createElement('div');
    element.className = 'palette';
    element.style.backgroundColor = `rgb(${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`
    element.addEventListener('mousedown', getColor);
    element.addEventListener('click', getPaletteColor);
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
  selecColor.style.boxShadow = '';
}

const resetBoard = () => {
  inputSize.value = 05;
  generateBoard(size());
}

const selectEraser = (event) => {
  sample.style.backgroundColor = 'rgb(61, 61, 61)';
  const select = document.querySelectorAll('.select');
  if (select.length > 0) {
    select.forEach((element) => {
      element.classList.remove('select')});
    }
}

eraser.addEventListener('click', selectEraser)
board.addEventListener('contextmenu', (event) => event.preventDefault())
userPalette.addEventListener('contextmenu', (event) => event.preventDefault())
selecColor.addEventListener('click', select, () => selecColor.classList.add('select'))
sample.addEventListener('click', getColor, select)
clear.addEventListener('click', generateBoard);
inputSize.addEventListener('input', changeInputSizeValue);
inputColor.addEventListener('input', changeSampleBackgroundColor, getColor);

window.onload = () => {
  changeSampleBackgroundColor();
  generateBoard(size());
  generatepalette();
};