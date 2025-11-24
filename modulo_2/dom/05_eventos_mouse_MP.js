const caja = document.getElementById('caja');

caja.addEventListener('mouseover', () => {
    caja.style.background = 'red';
});

caja.addEventListener('mouseout', () => {
    caja.style.background = 'yellow';
});

caja.addEventListener('click', () => {
    alert("¡Cita seleccionada!");
});
