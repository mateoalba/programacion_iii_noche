const cuadro = document.getElementById('cuadro');


function cambiarEstado() {
  const estados = [
    '#58a6ff', 
    '#00cc66', 
    '#ffcc00', 
    '#ff7b72', 
    '#9900ff'  
  ];

  const estadoRandom = estados[Math.floor(Math.random() * estados.length)];
  cuadro.style.backgroundColor = estadoRandom;
}


function aumentarPrioridad() {
  const width = parseInt(cuadro.style.width);
  const height = parseInt(cuadro.style.height);

  cuadro.style.width = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';
}


function reiniciarCita() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff'; 
}
