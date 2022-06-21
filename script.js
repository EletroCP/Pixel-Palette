const inputSizeValue = document.getElementById('input-size-value');
const inputSize = document.getElementById('input-size');
const inputColor = document.getElementById('input-color');
const sample = document.getElementById('sample');
const clear = document.getElementById('clear');
const generatePalette = document.getElementById('generat-palette');
const paletteSize = document.getElementById('palette-size');
const randoPalette = document.getElementById('randon-palette');

const changeInputSizeValue = () => {
  const newValue = inputSize.value;
  inputSizeValue.innerText = newValue;
}

const changeSampleBackgroundColor = () => {
  const newColor = inputColor.value;
  sample.style.backgroundColor = newColor;
}

inputSize.addEventListener('change', changeInputSizeValue);
inputColor.addEventListener('change', changeSampleBackgroundColor);

window.onload = () => {
  changeSampleBackgroundColor()
};