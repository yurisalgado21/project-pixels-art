const cores = ['black', 'red', 'blue', 'green'];
const paletta = document.createElement('ul');
const body = document.querySelector('body');
const buttom = document.getElementById('button-random-color');

// Requisito 2 e 3:
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

// Requisito 4:
paletta.appendChild(buttom);
const ramdomColors = () => {
  const colors = document.getElementsByClassName('color');
  for (let index = 1; index < colors.length; index += 1) {
    const cor1 = Math.floor(Math.random() * 256);
    const cor2 = Math.floor(Math.random() * 256);
    const cor3 = Math.floor(Math.random() * 256);
    const cor = `rgb(${cor1}, ${cor2}, ${cor3})`;
    colors[index].style.backgroundColor = cor;
  }
};
buttom.addEventListener('click', ramdomColors);
