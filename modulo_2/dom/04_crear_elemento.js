let parrafo= null;
const btnCrear= document.getElementById('crear');
const contenedor= document.getElementById('contenedor');
btnCrear.addEventListener('click', ()=>
    {
        parrafo= document.createElement('p');
        parrafo.textContent= "Este es un nuevo párrafo creado dinámicamente.";
        parrafo.classList.add('parrafo')
        contenedor.appendChild(parrafo);
    });

const btnEliminar= document.getElementById('eliminar');
btnEliminar.addEventListener('click', ()=>
{
    const parrafos = document.getElementsByClassName('parrafo');
    Array.from(parrafos).forEach(parrafo => parrafo.remove())
});


const btnDobleClick= document.getElementById('btnDobleClick');
btnDobleClick.addEventListener('dbclick', ()=> {
    alert("HIZO DOBLE CLICK");
});


const inputText= document.getElementById('nombre');
inputText.addEventListener('input', (e)=> {
    console.log('Escribiendo :', e.target.value);
});


const form= document.getElementById('formulario');
btnEliminar.addEventListener('submit', (e)=> {
    e.preventDefault();
    alert('Formulario enviado por $(inputText.value)')
});
