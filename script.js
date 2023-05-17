const cores = ['black', 'red', 'blue', 'green'];
const paletta = document.createElement('ul');
const body = document.querySelector('body');
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
