const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorCitas');
let citas = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const paciente = document.getElementById('paciente').value.trim();
  const motivo = document.getElementById('motivo').value.trim();
  const fecha = document.getElementById('fecha').value.trim();

  if (paciente && motivo && fecha) {
    const nuevaCita = { id: Date.now(), paciente, motivo, fecha };
    citas.push(nuevaCita);
    renderizarCita(nuevaCita);
    formulario.reset();
  }
});

function renderizarCita({ id, paciente, motivo, fecha }) {
  const div = document.createElement('div');
  div.className = 'cita';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${paciente}</h3>
    <p><strong>Motivo:</strong> ${motivo}</p>
    <p><strong>Fecha:</strong> ${fecha}</p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.cita');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    citas = citas.filter(c => c.id !== id);
    tarjeta.remove();
  }
});
