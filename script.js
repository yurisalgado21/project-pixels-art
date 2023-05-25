const cores = ['black', 'red', 'blue', 'green'];
const paletta = document.createElement('ul');
const body = document.querySelector('body');
const buttom = document.getElementById('button-random-color');
const pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
const buttomLimpar = document.getElementById('clear-board');

function addCores(cor) {
  for (let indice = 0; indice < cor.length; indice += 1) {
    const linhaCor = document.createElement('li');
    linhaCor.classList.add('color');
    paletta.appendChild(linhaCor);
    linhaCor.style.backgroundColor = cor[indice];
    body.appendChild(paletta);
  }
}
addCores(cores);
paletta.setAttribute('id', 'color-palette');
paletta.appendChild(buttom);
body.appendChild(buttomLimpar);
const ramdomColors = (event) => {
  let colors = document.getElementsByClassName('color');
  console.log(event);
  let array = [];
  for (let index = 0; index < colors.length; index += 1) {
    if (index !== 0) {
      if (!event[index]) {
        let cor1 = Math.floor(Math.random() * 256);
        let cor2 = Math.floor(Math.random() * 256);
        let cor3 = Math.floor(Math.random() * 256);
        let color = `rgb(${cor1}, ${cor2}, ${cor3})`;
        colors[index].style.backgroundColor = color;
        array.push({index, color});
      localStorage.setItem('colorPalette', JSON.stringify(array));
      }else {
        colors[index].style.backgroundColor = event[index].color;
      }
    } else {
      array.push({index, color: 'rgb(0, 0, 0)'})
    }
  }
};

buttom.addEventListener('click', ramdomColors);
const coresFixadas = localStorage.getItem('colorPalette');
console.log();

if (coresFixadas) {
  ramdomColors(JSON.parse(coresFixadas));
}

const pixels = [];
for (let i = 0; i < 5; i += 1) {
  const row = [];
  for (let j = 0; j < 5; j += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    row.push(pixel);
    pixelBoard.appendChild(pixel);
  }
  pixels.push(row);
}
document.body.appendChild(pixelBoard);
const firstLi = document.querySelector('li');
firstLi.classList.add('selected');

const selectColor = (event) => {
  const selectedColor = event.target;
  const colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    const color = colors[index];
    color.classList.remove('selected');
  }
  selectedColor.classList.add('selected');
};

paletta.addEventListener('click', selectColor);

const fillPixel = (event) => {
  const selectedColor = document.querySelector('.color.selected');
  const pixBoard = document.querySelectorAll('.pixel');
  const pixelBoardState = [];
  const clickedPixel = event.target;
  clickedPixel.style.backgroundColor = selectedColor.style.backgroundColor;
  for (let i = 0; i < pixBoard.length; i += 1) {
    pixelBoardState.push(pixBoard[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelBoardState));
};

const LoadPixelBoardState = () => {
  const pixelBoardState = JSON.parse(localStorage.getItem('pixelBoard'));
  if (pixelBoardState) {
    const pixelBoard = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = pixelBoardState[index];
    }
  }
}

const pixelsEmBranco = document.querySelectorAll('.pixel');
for (let i = 0; i < pixelsEmBranco.length; i += 1) {
  const pixelBranco = pixelsEmBranco[i];
  pixelBranco.addEventListener('click', fillPixel);
}

const limparPixelsBranco = () => {
  for (let index = 0; index < pixelsEmBranco.length; index += 1) {
    const pixel = pixelsEmBranco[index];
    pixel.style.backgroundColor = 'white';
  }
};

buttomLimpar.addEventListener('click', limparPixelsBranco);
LoadPixelBoardState();
